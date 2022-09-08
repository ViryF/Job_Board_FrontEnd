import Client from './api'

export const SignInEmployer = async (data) => {
  try{
    const res = await Client.post('api/employers/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const SignInSeeker = async (data) => {
  try{
    const res = await Client.post('api/seekers/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const registerEmployer = async (data) => {
  try {
    const res = await Client.post('api/employers/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RegisterSeeker = async (data) => {
  try {
    const res = await Client.post('api/seekers/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}


export const CheckSession = async () => {
  try {
    const res = await Client.get('api/employers/session')
    return res.data
  } catch (error) {
    throw error
  }
}
