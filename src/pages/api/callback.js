import { oauth2Client } from './loginyt'
import Moralis from 'moralis/node'
import { fetchUserChannel, fetchUserInfo } from '../../util/google'

const serverUrl = 'https://rsrqtfhqsfhm.usemoralis.com:2053/server'
const appId = 'VoMFmmbGFfVC3GEOPQxOZvJctC6VYMDwyIu44ba0'
const masterKey = '5wJ0FvcODyNuyKDK2NVgpaHBMc6pRhz1IGIRZL8v'

Moralis.start({ serverUrl, appId, masterKey })

export default async function handler(req, res) {
  try {
    const { state, code } = req.query
    if (!state || !code) throw new Error()

    // Verify if user exists
    const query = new Moralis.Query(Moralis.User)
    query.equalTo('username', state)
    const results = await query.find({ useMasterKey: true })
    if (results.length < 1) throw new Errow()

    // exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code)

    // 1. get user information
    const { email, name } = await fetchUserInfo(tokens.access_token)

    // 2. get channel information
    const { bio, channelId, channelTitle, coverPhoto, pfp } = await fetchUserChannel(
      tokens.access_token
    )

    // DB USER
    const user = results[0]

    // store information in Moralis DB and redirect with success flag
    user.set('youtubeCredentials', {
      name,
      channelId,
      channelTitle,
      bio,
      pfp,
      coverPhoto,
    })
    user.set('email', email)
    user.set('emailVerified', true)
    user.set('verifiedSocialPlatforms', ['youtube'])
    await user.save(null, { useMasterKey: true })

    res.redirect('http://localhost:3000?creatorFlow=success')
  } catch (err) {
    if (err.message === 'User has no channel.')
      return res.redirect('http://localhost:3000?creatorFlow=nochannel')
    res.redirect('http://localhost:3000?creatorFlow=fail')
  }
}
