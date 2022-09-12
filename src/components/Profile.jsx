import EmployerProfile from './EmployerProfile'
import SeekerProfile from './SeekerProfile'
import { useEffect } from 'react'

const Profile = ({ userType, user, authenticated, jobPosts, getJobPosts, bookmarks, setBookmarks, bookmarkPost }) => {


  useEffect(()=> {
    getJobPosts()
  }, [])

  let loggedUser

  if(userType === 'Seeker') {
    loggedUser = <SeekerProfile jobPosts={jobPosts} bookmarks={bookmarks} setBookmarks={setBookmarks} bookmarkPost={bookmarkPost} />
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