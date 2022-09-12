import EmployerProfile from './EmployerProfile'
import SeekerProfile from './SeekerProfile'
import { useEffect } from 'react'

const Profile = ({ userType, user, authenticated, jobPosts, getJobPosts }) => {


  useEffect(()=> {
    getJobPosts()
  }, [])

  let loggedUser

  if(userType === 'Seeker') {
    loggedUser = <SeekerProfile jobPosts={jobPosts} />
  } else {
    loggedUser = <EmployerProfile jobPosts={jobPosts} getJobPosts={getJobPosts}/>
  } 

  return user && authenticated ? (
    <div>
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