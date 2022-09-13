import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SeekerProfile = ({ jobPosts, bookmarkPost, searchValue, setSearchValue }) => {
  let navigate = useNavigate()

  return (
    <div>
      <h1>This is the Seeker Profile</h1>
      <div className="profile-page">
        <div className="profile">
          <div id='input-search-bar'>
            <input type="text" placeholder='Search job title' onChange={event => {setSearchValue(event.target.value)}} />
          </div>
          <h1 className="Welcome-user">Here's a list of the total jobs posted at the moment!</h1>
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
                  <button onClick={()=> bookmarkPost(jobPost._id)}>📘</button>
                  <button onClick={()=> navigate(`/${jobPost._id}/${index}`)}>Job Details</button> 
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