import React from 'react'
import './LoginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className="loginSignUp">
        <div className="loginSignUp-con">
            <h1>Sign Up</h1>
            <div className="loginSignUp-fields">
                <input type='text' placeholder='Your Name'></input>
                <input type='email' placeholder='Your Email'></input>
                <input type='password' placeholder='Your Password'></input>
            </div>
            <button>Continue</button>
            
            <p className='logsu-login'>Already have a account?<span>Login here!</span></p>
         <div className="logsu-agree">
            <input type='checkbox' id='' name=''></input>
           <p>By continuing, i agree to the terms and condition of use & privacy.</p>
         </div>
        </div>
    </div>
  )
}

export default LoginSignUp