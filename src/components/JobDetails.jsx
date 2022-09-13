import { useNavigate, useParams } from "react-router-dom"
import { SignInEmployer } from "../services/Auth"
import { useEffect } from "react"

const JobDetails = ({ jobPosts, selectedJobPost, setSelectedJobPost }) => {
  let navigate = useNavigate()


  let { id, index } = useParams()
  let jobDetails = jobPosts[index]

  useEffect(()=> {
    setSelectedJobPost(jobPosts[index])
  }, [])

  return (
    <div className="jobDetails">
      <div className="selectedPost">
        <h2>Here are the details for the posting you selected.</h2>
        <div className="jobsDetails">
          <h2>{selectedJobPost.title}</h2>
          <h2>Location:</h2>
          <h3>{selectedJobPost.location}</h3>
          <h3>Job Description:</h3>
          <p>{selectedJobPost.description}</p>
          <h3>Requirements:</h3>
          <p>{selectedJobPost.requirements}</p>
          <h3>Salary:</h3>
          <p>{selectedJobPost.salary}</p>
          <h3>Application</h3>
          <p>Go ahead and apply here! {selectedJobPost.application_url}</p>
        </div>
      </div>
      <button onClick={()=>navigate('/profile')}>Back</button>
    </div>
  )
}

export default JobDetails