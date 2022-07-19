import Moralis from 'moralis/node'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID
const masterKey = process.env.MORALIS_MASTER_KEY

Moralis.start({ serverUrl, appId, masterKey })

export default async function handler(req, res) {
  const { username } = req.body
  try {
    const query = new Moralis.Query(Moralis.User)
    query.equalTo('username', username)
    const results = await query.find({ useMasterKey: true })
    if (results.length < 1) {
      return res.json({ available: true })
    }
    if (results[0].getUsername() === username) {
      return res.json({ available: false })
    }
  } catch (err) {
    res.status(500).send(err)
  }
}
