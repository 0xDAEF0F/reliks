import { google } from 'googleapis'

// this credentials are secret
// TODO: move to .env and export to its own module (importing in callback)
export const oauth2Client = new google.auth.OAuth2(
  // clientId
  '1080843365185-5jvbk1upbvh5j3b1itsjecbn2l7khhga.apps.googleusercontent.com',
  // clientSecret
  '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',
  // callback url
  'http://localhost:3000/api/callback'
)

// TODO: Encode with another function
export default function handler(req, res) {
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/youtube.readonly',
    include_granted_scopes: true,
  })

  res.send(authorizationUrl)
}
