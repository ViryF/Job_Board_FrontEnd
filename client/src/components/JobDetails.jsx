import { useNavigate } from "react-router-dom"

const JobDetails = () => {
  let navigate = useNavigate()



  return (
    <div className="jobDetails">
      <div className="selectedPost">
        <h2>Here are the details for the posting you selected.</h2>
        <div>
          
        </div>
      </div>
      <button onClick={()=>navigate('/profile')}>Go Back</button>
    </div>
  )
}

export default JobDetails