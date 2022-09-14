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
              <Link to="/feed" className='navLinks'>Feed</Link>
              <Link to="/profile" className='navLinks'>Home</Link>
              <Link onClick={handleLogOut} to="/feed" className='navLinks'>Log Out</Link>
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
        <Link to="/feed" className='navLinks'>Feed</Link>
        <Link to="/register" className='navLinks'>Register</Link>
        <Link to="/login" className='navLinks'>Login</Link>
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