import { axios } from '@/lib/axios'

export const postSignIn = async (email: string, password: string) => {
  const response = await axios.post('/signIn', {
    email,
    password,
  })
  return response.data
}
