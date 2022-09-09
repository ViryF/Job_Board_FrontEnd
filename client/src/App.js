import JobDetails from './components/JobDetails';
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Feed from './components/Feed';
import Nav from './components/Nav'
import React from 'react';
import './styles/App.css';
import { Routes, Route, useParams } from 'react-router-dom'
import Client from './services/api'
import { useState, useEffect } from 'react';
import { CheckSession } from './services/Auth';


const BASE_URL = 'http://localhost:3001/api'


function App() {

const [latestJobPosts, setLatestJobPosts] = useState([])
const [jobPosts, setJobPosts] = useState([])
const [selectedJobPost, setSelectedJobPost] = useState(null)
const [authenticated, toggleAuthenticated] = useState(false)
const [user, setUser] = useState(null)

let { JobPostId } = useParams()

  const getLatestJobPosts = async () => {
    const latest = await Client.get(`${BASE_URL}/jobPosts/latest`)
    setLatestJobPosts(latest.data)
  }

  const getJobPosts = async () => {
    let posts = await Client.get(`${BASE_URL}/jobPosts/all`)
    setJobPosts(posts.data)
  } 
  
  const selectJobPost = async () => {
    const data = await Client.get(`${BASE_URL}/jobPosts/${JobPostId}`)
    setSelectedJobPost(data)
  }
  // selectJobPost()
  
const handleLogOut = () => {
  setUser(null)
  toggleAuthenticated(false)
  localStorage.clear()
}



const checkToken = async () => {
  const user = await CheckSession()
  setUser(user)
  toggleAuthenticated(true)
  
}

useEffect(() => {
  const status = localStorage.getItem('token')
  if (status) {
    checkToken()
  }
  getLatestJobPosts()
},[])

  return (
    <div className="App">
      <header className='App-header'>
        <Nav authenticated={authenticated} 
        user={user} 
        handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/feed" element={ <Feed latestJobPosts={ latestJobPosts } /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login setUser={setUser} toggleAuthenticated={toggleAuthenticated} /> } />
          <Route path="/profile" element={ <Profile user={user} authenticated={authenticated} jobPosts={jobPosts} getJobPosts={getJobPosts} /> } />
          <Route path="/jobListings/:id/:index" element={ <JobDetails user={user} authenticated={authenticated} selectedJobPost={selectedJobPost} setSelectedJobPost={selectedJobPost}/> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
