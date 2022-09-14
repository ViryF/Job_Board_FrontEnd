import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Client from "../services/api"


const NewJobPost = ({user}) => {
  let navigate = useNavigate()

  const initialFormState = {
    employer: user.id,
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    application_url: '',
  }

  const [formValues, setFormValues] = useState(initialFormState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    await Client.post(`/jobPosts/post`, formValues)
    navigate(`/profile`)
  }
  return (
    <div className="addPost">
      <h1>Create a job post now!</h1>
      <h4>Please enter your information below...</h4>
      <form className="col" onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label>
        <input id="title" type="text" placeholder="Enter the job title here" value={formValues.title} onChange={handleChange} />

        <label htmlFor="description">Description: </label>
        <textarea id="description" placeholder="Enter the job description here" cols="30" rows="10" value={formValues.description} onChange={handleChange}></textarea>

        <label htmlFor="requirements">Requirements: </label>
        <textarea id="requirements" type="text" placeholder="Enter the job requirements here" cols="30" rows="10" value={formValues.requirements} onChange={handleChange}></textarea>

        <label htmlFor="location">Location: </label>
        <input id="location" type="text" placeholder="Enter job location" value={formValues.location} onChange={handleChange} />

        <label htmlFor="salary">Salary: </label>
        <input id="salary" type="text" placeholder="Enter the salary range here" value={formValues.salary} onChange={handleChange} />

        <label htmlFor="application_url">Application Link: </label>
        <input id="application_url" type="text" placeholder="Enter a link for seekers to submit an application" value={formValues.application_url} onChange={handleChange} />

        <button className="button" type="submit" disabled={!formValues.title || !formValues.description || !formValues.requirements || !formValues.location || !formValues.salary || !formValues.application_url}>Submit New Post</button>
      <button className="button" onClick={()=> navigate('/profile')}>Back</button>
      </form>

    </div>
  )

}

export default NewJobPost