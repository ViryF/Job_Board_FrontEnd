import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import Client from "../services/api"

const EditJobPost = ({ jobPosts }) => {
  let navigate = useNavigate()

  let { jobPostId, index } = useParams()
  let initialFormState = {
    employer: jobPosts[index].employer,
    title: jobPosts[index].title, 
    description: jobPosts[index].description, 
    requirements: jobPosts[index].requirements, 
    location: jobPosts[index].location, 
    salary: jobPosts[index].salary, 
    application_url: jobPosts[index].application_url
  }

  const [formValues, setFormValues] = useState(initialFormState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/api/jobPosts/${jobPostId}`, formValues)
    setFormValues(initialFormState)
    navigate(`/profile`)
  }

  return (
    <div className="editPost">
      <h1>Edit your own post now!</h1>
      <h4>Please enter the new information below!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input id='title'type="text" placeholder="Enter the Job title" value={formValues.title} onChange={handleChange}/>

        <label htmlFor="description">Description: </label>
        <input id='description'type="text" placeholder="Enter the Job description" cols="30" rows="10" value={formValues.description} onChange={handleChange}/>

        <label htmlFor="requirements">Requirements: </label>
        <input id='requirements'type="text" placeholder="Enter the Job requirements" cols="30" rows="10" value={formValues.requirements} onChange={handleChange}/>

        <label htmlFor="location">Location: </label>
        <input id='location'type="text" placeholder="Enter the Job location" value={formValues.location} onChange={handleChange}/>

        <label htmlFor="salary">Salary: </label>
        <input id='salary'type="text" placeholder="Enter the salary range" value={formValues.salary} onChange={handleChange}/>

        <label htmlFor="application_url">Application Link: </label>
        <input id='application_url'type="text" placeholder="Enter a link for seekers to submit an application" value={formValues.application_url} onChange={handleChange}/>
        <button type="submit">Submit Change</button>
      </form>
    </div>
  )

}

export default EditJobPost