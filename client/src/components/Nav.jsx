import { Link } from 'react-router-dom'
import React from 'react'

const Nav = ({ authenticated, user, handleLogOut}) => {
  let isAuthenticated
  if(user) {
    isAuthenticated = (
      <nav className='navbar'>
        <div>
          <div>
            <h4>Super Awesome Job Board</h4>
            <h3>Welcome Back!</h3>
            <div>
              <Link to="/feed" className='links'>Feed</Link>
              <Link to="/profile" className='links'>Home</Link>
              <Link to="/settings" className='links'>Settings</Link>
              <Link onClick={handleLogOut} to="/feed" className='links'>Log Out</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  const notAuthenticated = (
    <nav className='navbar'>
      <div>
        <h4>Super Awesome Job Board</h4>
        <Link to="/feed">Feed</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
  return (
    <header>
      <Link to="/feed"></Link>
      {authenticated && user ? isAuthenticated : notAuthenticated }
    </header>
  )
}

export default Nav