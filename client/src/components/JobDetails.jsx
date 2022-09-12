import EmployerJobDetails from "./EmployerJobDetails"
import SeekerJobDetails from "./SeekerJobDetails"
import { useNavigate, useParams } from "react-router-dom"
import { SignInEmployer } from "../services/Auth"
import { useEffect } from "react"

const JobDetails = ({ user, authenticated, jobPosts, selectedJobPost, setSelectedJobPost, selectJobPost }) => {
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
          {/* {selectedJobPost?.map((job, index) => (
            <div className="jobDetails-card" key={job._id}>
            <h2>{job.title}</h2>
            </div>
          ))
          } */}
        </div>
      </div>
      <button onClick={()=>navigate('/profile')}>Back</button>
    </div>
  )
}

export default JobDetails