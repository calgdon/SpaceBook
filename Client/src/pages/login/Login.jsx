import React, {useRef, useContext} from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext} from "../../context/AuthContext"

function Login() {
    const email = useRef()
    const password = useRef()

  const { isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
              placeholder='Email'
              type='email'
              minlegth='6'
              required
              className='loginInput'
              ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              required
              className='loginInput'
              ref={password}
            />
            <button className='loginButton' type='submit' disabled={isFetching}>
              {isFetching ? ("Loading") : (
                'Log In'
              )}
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
