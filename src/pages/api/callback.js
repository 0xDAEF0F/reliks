import { oauth2Client } from './loginyt'
import Moralis from 'moralis/node'
import Axios from 'axios'

const serverUrl = 'https://rsrqtfhqsfhm.usemoralis.com:2053/server'
const appId = 'VoMFmmbGFfVC3GEOPQxOZvJctC6VYMDwyIu44ba0'
const masterKey = '5wJ0FvcODyNuyKDK2NVgpaHBMc6pRhz1IGIRZL8v'

Moralis.start({ serverUrl, appId, masterKey })

// EXAMPLE OF YOUTUBE CREDENTIALS OBJECT:
const youtubeCredentialsExample = {
  name: '',
  pfp: '',
  channelTitle: '',
  bio: '',
  coverPhoto: '',
  refreshToken: '',
}

export default async function handler(req, res) {
  try {
    const { state, code } = req.query
    if (!state || !code) throw new Error()

    // verify in db that user exists (sanity check)
    const query = new Moralis.Query(Moralis.User)
    query.equalTo('username', state)
    const results = await query.find({ useMasterKey: true })
    if (results.length < 1) throw new Errow()

    const user = results[0]
    let youtubeCredentials = { ...youtubeCredentialsExample }

    // exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code)
    youtubeCredentials.refreshToken = tokens.refresh_token

    // 1. get user information
    const res1 = await Axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    })
    youtubeCredentials.name = res1.data.name

    // 2. get channel information
    const res2 = await Axios.get(
      'https://youtube.googleapis.com/youtube/v3/channels?mine=true&key=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&part=brandingSettings,contentOwnerDetails,id,snippet,topicDetails',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    )
    if (!res2.data.items) throw new Error('User has no channel.')
    const channel = res2.data.items[0]
    const pfp = channel?.snippet?.thumbnails?.default?.url
    const channelTitle = channel?.brandingSettings?.channel?.title
    const bio = channel?.brandingSettings?.channel?.description
    const coverPhoto = channel?.brandingSettings?.image?.bannerExternalUrl
    youtubeCredentials.pfp = pfp
    youtubeCredentials.channelTitle = channelTitle
    youtubeCredentials.bio = bio
    youtubeCredentials.coverPhoto = coverPhoto

    // after calling the two endpoints for user data with token,
    // store information in Moralis DB and redirect with success flag
    user.set('youtubeCredentials', youtubeCredentials)
    user.set('email', res1.data.email)
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
