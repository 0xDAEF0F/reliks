import { google } from 'googleapis'

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.reliks.xyz'
    : 'http://localhost:3000'

export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${BASE_URL}/api/callback`
)

const scopes = [
  'https://www.googleapis.com/auth/youtube.readonly',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
]

export default function handler(req, res) {
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true,
    state: req.query.state,
  })

  res.send(authorizationUrl)
}
