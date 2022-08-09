// CODE WILL ONLY RUN IN SERVER
import { slice, map } from 'lodash'
import Moralis from 'moralis/node'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID
const masterKey = process.env.MORALIS_MASTER_KEY

Moralis.start({ serverUrl, appId, masterKey })

export async function getLastCreators(last) {
  if (typeof last !== 'number' && last < 1) throw new Error('num lt 1')
  const query = new Moralis.Query(Moralis.User)
  query.containsAll('verifiedSocialPlatforms', ['youtube'])
  const results = await query.find({ useMasterKey: true })
  if (results.length < 1) return []
  const users = slice(results, 0, last)
  return map(users, extractCreatorPublicInformation)
}

export async function getCreatorInformation(username) {
  const query = new Moralis.Query(Moralis.User)
  query.equalTo('username', username)
  const results = await query.find({ useMasterKey: true })
  // no matching user
  if (results.length < 1) throw new Error()
  const user = results[0]
  // user is not a creator
  if (user.get('verifiedSocialPlatforms').length < 1) throw new Error()
  return extractCreatorPublicInformation(user)
}

export async function getAllUsernames() {
  const query = new Moralis.Query(Moralis.User)
  query.containsAll('verifiedSocialPlatforms', ['youtube'])
  const results = await query.find({ useMasterKey: true })
  return results.map((user) => {
    return {
      params: {
        username: user.getUsername(),
      },
    }
  })
}

export function extractCreatorPublicInformation(user) {
  const youtubeCredentials = user.get('youtubeCredentials')
  const { refreshToken, ...rest } = youtubeCredentials
  const ethAddress = user.get('ethAddress')
  const createdAt = user.get('createdAt')
  const whaleStrategy = user.get('whaleStrategy') || null
  return {
    ...rest,
    ethAddress,
    createdAt: new Date(createdAt).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    }),
    username: user.getUsername(),
    whaleStrategy,
  }
}
