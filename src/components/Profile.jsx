import EmployerProfile from './EmployerProfile'
import SeekerProfile from './SeekerProfile'
import { useEffect, useState } from 'react'

const Profile = ({ userType, user, authenticated, jobPosts, getJobPosts, bookmarks, setBookmarks, bookmarkPost }) => {

  const [searchValue, setSearchValue ] = useState("")

  useEffect(()=> {
    getJobPosts()
  }, [])

  let loggedUser

  if(userType === 'Seeker') {
    loggedUser = <SeekerProfile jobPosts={jobPosts} bookmarks={bookmarks} setBookmarks={setBookmarks} bookmarkPost={bookmarkPost} setSearchValue={setSearchValue} searchValue={searchValue} />
  } else {
    loggedUser = <EmployerProfile jobPosts={jobPosts} getJobPosts={getJobPosts} searchValue={searchValue} setSearchValue={setSearchValue} />
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