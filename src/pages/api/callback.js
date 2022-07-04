import { oauth2Client } from './loginyt'

export default async function handler(req, res) {
  const code = req.query.code

  if (!code) return res.send('unauthenticated')

  const { tokens } = await oauth2Client.getToken(code)

  // do something with tokens
  // console.log(tokens)

  res.send('authenticated')
}
