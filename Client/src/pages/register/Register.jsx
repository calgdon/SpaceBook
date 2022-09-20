import React, {useRef} from 'react'
import './register.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    if (passwordAgain.current.value !== password.current.value) {
    password.current.setCustomValidity("Passwords don't match")
  } else { 
    const user = {
      username : username.current.value,
      email : email.current.value,
      password : password.current.value,
    }
    try {
    await axios.post('/auth/register', user);
    navigate("/login")
  }catch(err){
    console.log(err)
  }
}
  }

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
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              ref={username}
              type='text'
              className='loginInput'
            />
            <input
              placeholder='Email'
              required
              ref={email}
              type='email'
              className='loginInput'
            />
            <input
              placeholder='Password'
              required
              ref={password}
              type='password'
              className='loginInput'
              minLength='6'
            />
            <input
              placeholder='Password Again'
              required
              ref={passwordAgain}
              type='password'
              className='loginInput'
              minLength='6'
            />
            <button className='loginButton' type="submit">Sign Up</button>
            <button className='loginRegisterButton'>
              Log Into Your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
