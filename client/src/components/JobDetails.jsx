import { useNavigate } from "react-router-dom"

const JobDetails = () => {
  let navigate = useNavigate()

  return (
    <div>
      <button onClick={()=>navigate('/profile')}>Go Back</button>
    </div>
  )
}

export default JobDetails