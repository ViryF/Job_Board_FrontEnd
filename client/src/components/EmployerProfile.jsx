import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const BASE_URL = 'http://localhost:3001/api'

const EmployerProfile = ({ user, authenticated, jobPosts }) => {
  
  let navigate = useNavigate()

  const [profileDetails, setProfileDetails] = useState([])



  return ( // user && authenticated  
    <div>
      <h1>This is the Employer Profile</h1>
      <div className="profile-page">
        <div className="profile">
          <h1 className="Welcome-user">Here's a list of the total jobs posted at the moment!</h1>
          <div className="allJobs">
            {jobPosts?.map((jobPost, index) => (
                <div className="jobPost-card" key={jobPost._id}>
                  <h2>{jobPost.title}</h2>
                  <h4>{jobPost.salary}</h4>
                  {/* <button onClick={()=> navigate(`/jobListings/${jobPost._id}/${index}`)}>Click Here for details about this posting</button>  */}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
  // : (
  //   <div>
  //     <h2>You must be signed in to access this page!</h2>
  //     <button onClick={()=> navigate('/login')}>Sign In</button>
  //   </div>
  // )
}

export default EmployerProfile