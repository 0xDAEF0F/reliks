import Axios from 'axios'

export async function fetchUserInfo(token) {
  const response = await Axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return {
    name: response.data?.name,
    email: response.data?.email,
  }
}

export async function fetchUserChannel(token) {
  const response = await Axios.get(
    'https://youtube.googleapis.com/youtube/v3/channels?mine=true&key=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&part=brandingSettings,contentOwnerDetails,id,snippet,topicDetails',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  if (!response.data.items) throw new Error('User has no channel.')
  const channel = response.data.items[0]
  return {
    pfp: channel?.snippet?.thumbnails?.high?.url,
    channelTitle: channel?.brandingSettings?.channel?.title,
    bio: channel?.brandingSettings?.channel?.description,
    coverPhoto: channel?.brandingSettings?.image?.bannerExternalUrl + '=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    channelId: channel?.id,
  }
}
