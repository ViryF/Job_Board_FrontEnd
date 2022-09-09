import EmployerProfile from './EmployerProfile'
import SeekerProfile from './SeekerProfile'
import { useState, useEffect } from 'react'

const Profile = ({ user, authenticated, jobPosts, getJobPosts }) => {

  const [userType, setUserType] = useState(false)

  useEffect(()=> {
    getJobPosts()
  }, [])

  let loggedUser

  if(!userType) {
    loggedUser = <SeekerProfile jobPosts={jobPosts} />
  } else {
    loggedUser = <EmployerProfile jobPosts={jobPosts} />
  }

  return user && authenticated ? (
    <div className='profile-page'>
      <div className='profile-container'>{loggedUser}</div>
    </div>
  ) 
  : (
    <div>You must be signed in to access this page!</div>
  )
}

export default Profile