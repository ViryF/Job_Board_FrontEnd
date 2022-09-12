import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SeekerProfile = ({ jobPosts, userType, setUserType, bookmarks, setBookmarks, bookmarkPost }) => {
  let navigate = useNavigate()

  return (
    <div>
      <h1>This is the Seeker Profile</h1>
      <div className="profile-page">
        <div className="profile">
          <h1 className="Welcome-user">Here's a list of the total jobs posted at the moment!</h1>
          <div className="allJobs">
            {jobPosts?.map((jobPost, index) => (
                <div className="jobPost-card" key={jobPost._id}>
                  <h2>{jobPost.title}</h2>
                  <h4>{jobPost.salary}</h4>
                  <button onClick={()=> bookmarkPost(jobPost._id)}>📘</button>
                  <button onClick={()=> navigate(`/${jobPost._id}/${index}`)}>Click Here for details about this posting</button> 
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default SeekerProfile