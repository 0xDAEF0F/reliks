import Axios from 'axios'
import * as yup from 'yup'

async function isUsernameAvailable(username) {
  const isFree = await Axios.post('/api/isUsernameAvailable', {
    username: username,
  })
  return isFree.data.available
}

export const schema = yup.object({
  username: yup
    .string()
    .optional()
    .test('isAvailable', 'user is taken', isUsernameAvailable),
  email: yup.string().email('must be a valid email.').required(),
})
