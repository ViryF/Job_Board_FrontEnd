// import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Client from "../services/api"

const EmployerProfile = ({ jobPosts, getJobPosts }) => {
  
  let navigate = useNavigate()

  // const [profileDetails, setProfileDetails] = useState([])

  const deletePost = async (jobPostId) => {
    await Client.delete(`/api/jobPosts/${jobPostId}`)
    getJobPosts()
  }


  return (  
    <div>
      <h1>This is the Employer Profile</h1>
      <div className="profile-page">
        <div className="profile">
          <h1 className="Welcome-user">Here's a list of the total jobs posted at the moment!</h1>
          <Link to={`/addJobPost`}><button>Add New Job Post</button></Link>
          <div className="allJobs">
            {jobPosts?.map((jobPost, index) => (
                <div className="jobPost-card" key={jobPost._id}>
                  <h2>{jobPost.title}</h2>
                  <h4>{jobPost.salary}</h4>
                  <button onClick={()=> navigate(`/${jobPost._id}/${index}`)}>Click Here for details about this posting</button>
                  <Link to={`/edit/${jobPost._id}/${index}`}><button>Edit Post</button></Link>
                  <button onClick={()=>deletePost(jobPost._id)}>Delete Post</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerProfile