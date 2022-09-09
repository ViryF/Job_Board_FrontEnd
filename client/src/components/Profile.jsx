import { useNavigate } from 'react-router-dom'


const BASE_URL = 'http://localhost:3001/api'

const Profile = ({ user, authenticated, jobPosts }) => {
  let navigate = useNavigate()
  


  return user && authenticated ? (
    <div className="profile-page">
      <div className="profile">
        <h2 className="Welcome-user">Here's a list of the total jobs posted at the moment!</h2>
        <div className="allJobs">
          {jobPosts &&
            jobPosts?.map((jobPost) => (
              <div className="jobPost-card" key={jobPost._id}>
                <h2>{jobPost.title}</h2>
                <h4>{jobPost.salary}</h4>
                <button onClick={()=> navigate(`/jobListings/${jobPost._id}`)}>Click Here for details about this posting</button> 
                {/* <h3>{jobPost.description}</h3>
                <h3>{jobPost.requirements}</h3>
                <h4>{jobPost.location}</h4> */}
                {/* <h4>{jobPost.employer}</h4> 
                {/* <h4>{jobPost.application_url}</h4> */}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h2>You must be signed in to access this page!</h2>
      <button onClick={()=> navigate('/login')}>Sign In</button>
    </div>
  )
  
}

export default Profile