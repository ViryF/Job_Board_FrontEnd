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
          <h2>{selectedJobPost.location}</h2>
          <p>{selectedJobPost.description}</p>
          <p>{selectedJobPost.requirements}</p>
          <p>{selectedJobPost.salary}</p>
          <p>Go ahead and apply here! {selectedJobPost.application_url}</p>
        </div>
      </div>
      <button onClick={()=>navigate('/profile')}>Back</button>
    </div>
  )
}

export default JobDetails