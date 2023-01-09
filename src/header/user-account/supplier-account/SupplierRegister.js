import React from 'react'
import './SupplierRegister.css'

export default function SignUp() {
  return (
    <>
      
      <div className='signup-container'>
        <div className='signup-title'>Signup</div>
        <form className='registration-form'>
          <div className='first-name-container'>
            {/* <label>First Name: </label> */}
            <input type='text' placeholder='First Name' />
          </div>
          <div className='last-name-container'>
            {/* <label>Last Name: </label> */}
            <input type='text' placeholder='Last Name'/>
          </div>
          <div className='company-name'>
            <input type='text' placeholder='Company Name'/>
          </div>
          <div className='services-provided'> 
            <input type='text' placeholder='Services Provided'/>
          </div>
          <div className='email-container'>
            {/* <label>Email: </label> */}
            <input type='email' placeholder='Email' />
          </div>
          <div className='password-container'>
            {/* <label>Password: </label> */}
            <input type='password' placeholder='Password'/>
          </div>
          <div className='confirm-password-container'>
            {/* <label>Confirm Password: </label> */}
            <input type='password' placeholder='Confirm Password'/>
          </div>
          <div className='signup-btn-container'>
            <button type='submit'>Signup</button>
          </div>
          <div className='terms-and-conditions-container'>
            <input type='checkbox' className='checkbox'/>
            <p className='terms-and-conditions'>
              I have read and I understand and accept the WeShare Terms of Use, and WeShare Privacy Policy and Cookie Policy, and here by agree and grant my consent to certain of my information being shared with online exhibitors when I perform any Relevant Interaction and being used, in accordance with the provisions thereof.
            </p>
          </div>
        </form>
      </div>
    </>
  )
}
