import React from 'react'

const Login = () => {
  return (
    <div className="body">
    <div className="container">
      <div className="heading">
        <h1>Login</h1>
      </div>
      <div className="form">
        <div className="input-box">
          <input type="text" placeholder='EMAIL or USERNAME' />
          <input type="password" placeholder='yourPASSWORD!' />
          <a href=" ">having problem with sign in?</a>
          <a href=" ">forgotten password?</a>
        </div>
        <div className="button-box">
          <button>Login</button>
          <button>signup</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login 