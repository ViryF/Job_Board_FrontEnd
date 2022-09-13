import { useNavigate } from "react-router-dom"

const Feed = ({ latestJobPosts }) => {
  let navigate = useNavigate()

  return (
    <div>
      <div>
        <h1>Hello! My name is Viridiana, and this is my job board website. Take a look around!</h1>
      </div>
      <br></br>
      <div>
        <p>Go ahead and sign up as an Employer if you would like to make your own job posting.</p>
        <p>Otherwise, you can sign up as a seeker if you would like to save and review job postings.</p>
      </div>
      <div className="latest-jobs-grid">
        {
          latestJobPosts?.map((jobPost) => (
            <div className="jobPost-card" key={jobPost._id}>
              <h2>{jobPost.title}</h2>
              <h3>Salary: {jobPost.salary}</h3>
              <button onClick={() => navigate('/login')}>Login to view details about this posting</button> 
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Feed