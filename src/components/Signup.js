import React from 'react'

const Signup = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="heading">
          <h1>Signup</h1>
        </div>
        <div className="form">
          <div className="input-box">
            <input type="text" placeholder='username' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="password" placeholder='confirm-password' />
              <a href=" ">having problem with sign-up?</a>
          </div>
          <div className="button-box">
            <button>SignUp</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup