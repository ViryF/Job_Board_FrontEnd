import EmployerProfile from './EmployerProfile'
import SeekerProfile from './SeekerProfile'
import { useState, useEffect } from 'react'

const Profile = ({ user, authenticated, jobPosts, getJobPosts }) => {

  const [userType, setUserType] = useState(false)

  useEffect(()=> {
    getJobPosts()
    // setUserType() // The user type doesn't automatically detect if the user signed in is an Employer. Why? 
  }, [])

  let loggedUser

  if(!userType) {
    loggedUser = <SeekerProfile jobPosts={jobPosts} />
  } else {
    // setUserType(true)
    loggedUser = <EmployerProfile jobPosts={jobPosts} getJobPosts={getJobPosts}/>
  }

  return user && authenticated ? (
    <div>
      {/* loggedUser ? <EmployerProfile jobPosts={jobPosts} /> : <SeekerProfile jobPosts={jobPosts} /> */} 
      {/* adding this line makes both components render together regardless of whether the state is true or false */}
      <div className='profile-page'>
        <div className='profile-container'>{loggedUser}</div>
      </div>
    </div>
  ) 
  : (
    <div>You must be signed in to access this page!</div>
  )
}

export default Profile