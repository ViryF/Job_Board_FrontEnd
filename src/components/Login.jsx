import { SignInEmployer, SignInSeeker } from "../services/Auth";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const BASE_URL = 'https://damp-retreat-34431.herokuapp.com/api'

const Login = ({ setUserType, setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()

  const initialLoginValues = {
    email: '',
    password: ''
  }

  const [LoginValues, setLoginValues] = useState(initialLoginValues)

  const handleChange = (e) => {
    setLoginValues({ ...LoginValues, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let seeker = await axios.post(`${BASE_URL}/seekers/check`, LoginValues)
      if (seeker.data) {
        const payload = await SignInSeeker(LoginValues)
        setLoginValues(initialLoginValues)
        setUser(payload)
        toggleAuthenticated(true)
        setUserType('Seeker')
        navigate('/profile')
      } else {
        const payload = await SignInEmployer(LoginValues)
        setLoginValues(initialLoginValues)
        setUser(payload)
        toggleAuthenticated(true)
        setUserType('Employer')
        navigate('/profile')
      }
    } catch (error) {
      throw error
    }
  }

return (
  <div className="login col">
    <div className="card-overlay centered">
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <h1 className="header">Login</h1>
          <label htmlFor="email">Email: </label>
          <input id="loginEmail" onChange={handleChange} name="email" type="email" placeholder="email@example.com" value={LoginValues.email} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input id="loginPassword" onChange={handleChange} name="password" type="password" placeholder="Enter your password" value={LoginValues.password} required />
        </div>
        <button className="button" type='submit'  disabled={!LoginValues.email || !LoginValues.password}>Sign In</button>
      </form>
        <div>
          <p>Don't have an account yet? Click here to register</p>
        <button className="button" onClick={()=> navigate('/register')}>Register</button>
        </div>
    </div>
  </div>
)
}

export default Login