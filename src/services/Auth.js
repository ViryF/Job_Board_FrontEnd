import Client from './api'

export const SignInEmployer = async (data) => {
  try{
    const res = await Client.post('/employers/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.employer
  } catch (error) {
    throw error
  }
}

export const SignInSeeker = async (data) => {
  try{
    const res = await Client.post('/seekers/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.seeker
  } catch (error) {
    throw error
  }
}

export const registerEmployer = async (data) => {
  try {
    const res = await Client.post('/employers/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RegisterSeeker = async (data) => {
  try {
    const res = await Client.post('/seekers/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/employers/session')
    return res.data
  } catch (error) {
    throw error
  }
}