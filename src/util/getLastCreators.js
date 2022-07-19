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
  if (results.length < 1) return res.send([])
  const users = slice(results, 0, last)
  return map(users, extractCreatorPublicInformation)
}

export function extractCreatorPublicInformation(user) {
  const youtubeCredentials = user.get('youtubeCredentials')
  const { refreshToken, ...rest } = youtubeCredentials
  const ethAddress = user.get('ethAddress')
  const createdAt = user.get('createdAt')
  return {
    ...rest,
    ethAddress,
    createdAt: new Date(createdAt).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    }),
    username: user.getUsername(),
  }
}
