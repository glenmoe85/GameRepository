import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
	return (
		<form>
<div className="mb-3">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
  <div className="mb-3">

    <label for="unEmailLab" className="form-label">Email address</label>
    <input type="email" className="form-control" id="unEmail" />
  </div>
  <div className="mb-3">
    <label for="unPasswordLab" className="form-label">Password</label>
    <input type="password" className="form-control" id="unPassword" />
  </div>  
  <button type="submit" className="btn btn-primary">Submit</button>
  <p className="message">Not registered? <a href="/Register" className="nav-link">Create an Account</a></p>
</form>
	)
}

export default Home;