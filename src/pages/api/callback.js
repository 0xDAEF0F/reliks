import { oauth2Client } from './loginyt'

// TODO: Decode with another function
export default async function handler(req, res) {
  // exchange code for tokens
  const code = req.query.code
  const state = atob(req.query.state)

  const { tokens } = await oauth2Client.getToken(code)

  res.json({ tokens, state })
}
