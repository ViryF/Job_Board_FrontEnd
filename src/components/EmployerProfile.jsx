// import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Client from "../services/api"

const EmployerProfile = ({ jobPosts, getJobPosts, searchValue, setSearchValue }) => {
  
  let navigate = useNavigate()

  const deletePost = async (jobPostId) => {
    await Client.delete(`/jobPosts/${jobPostId}`)
    getJobPosts()
  }


  return (  
    <div>
      <h1>This is the Employer Profile</h1>
      <div className="profile-page">
        <div className="profile">
          <div id='input-search-bar'>
            <input type="text" placeholder='Search job title' onChange={event => {setSearchValue(event.target.value)}} />
          </div>
          <h1 className="Welcome-user">Here's a list of the total jobs posted at the moment!</h1>
          <Link to={`/addJobPost`}><button>Add New Job Post</button></Link>
          <div className="allJobs">
          {jobPosts.filter((val)=> {
            if(searchValue === "") {
              return val
            } else if ((val.title.toLowerCase()).includes(searchValue.toLowerCase())) {
              return val
            }
          })?.map((jobPost, index) => (
                <div className="jobPost-card" key={jobPost._id}>
                  <h2>{jobPost.title}</h2>
                  <h4>Salary: {jobPost.salary}</h4>
                  <button className="button" onClick={()=> navigate(`/${jobPost._id}/${index}`)}>Job Post Details</button>
                  <Link to={`/edit/${jobPost._id}/${index}`}><button>📋</button></Link>
                  <button onClick={()=>deletePost(jobPost._id)}>🗑️</button>
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