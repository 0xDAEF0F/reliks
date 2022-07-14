import Moralis from 'moralis/node'

// TODO: Move to .env
const serverUrl = 'https://rsrqtfhqsfhm.usemoralis.com:2053/server'
const appId = 'VoMFmmbGFfVC3GEOPQxOZvJctC6VYMDwyIu44ba0'
const masterKey = '5wJ0FvcODyNuyKDK2NVgpaHBMc6pRhz1IGIRZL8v'

Moralis.start({ serverUrl, appId, masterKey })

export default async function handler(req, res) {
  const { username } = req.body
  try {
    const query = new Moralis.Query(Moralis.User)
    query.equalTo('username', username)
    const results = await query.find({ useMasterKey: true })
    // User does not exist
    if (results.length < 1) {
      return res.send(false)
    }
    const user = results[0]
    // user is not a creator
    if (user.get('verifiedSocialPlatforms').length < 1) {
      return res.send(false)
    }
    // response with creator profile information
    const youtubeCredentials = user.get('youtubeCredentials')
    const ethAddress = user.get('ethAddress')
    const createdAt = user.get('createdAt')
    return res.json({
      ...youtubeCredentials,
      refreshToken: null,
      ethAddress,
      createdAt,
    })
  } catch (err) {
    res.status(500).send(err)
  }
}
