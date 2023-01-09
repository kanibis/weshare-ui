import React from 'react'
import './SupplierLogin.css'

export default function Login() {
  return (
    <div className='account-container'>        
        <div className='login-title'>Login</div>
        <form className='login-form'>
          <div className='email-container'>
            {/* <label for='login-email'>Email</label> */}
            <input type='email' placeholder='Email Address' id='login-email'/>
          </div>
          <div className='password-container'>
            {/* <label for='login-password'>Password</label> */}
            <input type='email' placeholder='Password' id='login-password'/>
          </div>
          <div className='login-btn-container'>
            <p className='forgot-password'>Forgot Password?</p>
            <button type='submit'>Login</button>
          </div>
          <div className='not-registered'>
            Not yet registered?
          </div>
          <div>
            <button className='register-btn'>
              Register
            </button>
          </div>
          
        </form>
    </div>
  )
}