import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>SpaceBook</h3>
          <span className='loginDesc'>
            Connect with your friends and foes, even if they are in a galaxy
            far, far away!
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Username' type='text' className='loginInput' />
            <input placeholder='Email' type='email' className='loginInput' />
            <input placeholder='Password' type='text' className='loginInput' />
            <input placeholder='Password Again' type='text' className='loginInput' />
            <button className='loginButton'>Sign Up</button>
            <button className='loginRegisterButton'>
              Log Into Your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
