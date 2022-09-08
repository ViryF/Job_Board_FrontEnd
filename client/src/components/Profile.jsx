// import { Link, useNavigate } from 'react-router-dom'

const Profile = ({ user, authenticated, jobPosts }) => {

  return user && authenticated ? (
    <div className="profile-page">
      <div className="links-container">
        {/* <Link className='profile-link' to='/shop'></Link>
        <Link className='profile-link' to='/'></Link> */}
      </div>
      <div className="profile">
        <p className="Welcome-user">Welcome, {user.firstName}</p>
        <div className="allJobs">
          {
            jobPosts?.map((jobPost) => {
              <div className="jobPost-card" key={jobPost.id}>
                <h2>{jobPost.title}</h2>
              <h3>{jobPost.description}</h3>
              <h3>{jobPost.requirements}</h3>
              <h4>{jobPost.location}</h4>
              <h4>{jobPost.salary}</h4>
              <h4>{jobPost.employer}</h4>
              <h4>{jobPost.application_url}</h4>
              </div>
            })
          }
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h2>You must be signed in to access this page! Please sign above!</h2>
    </div>
  )
  
}

export default Profile