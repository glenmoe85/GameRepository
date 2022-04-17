import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

function Home() {
	return (
		<div>
			<Header />
			<div className="login-container">
				<div className="login-container-box col-12 col-md-8 col-lg-6 col-xl-5">
					<div className="login-box card shadow-2-strong">
						<div className="card-body p-5 text-center">
							<h3>LOGIN</h3>
							<p>Please enter your credentials to login.</p>
							<div className="form-outline mb-4">
								<label for="unEmailLab" className="form-label">Email address</label>
								<input type="email" className="form-control" id="unEmail" />
							</div>
							<div className="form-outline mb-4">
								<label for="unPasswordLab" className="form-label">Password</label>
								<input type="password" className="form-control" id="unPassword" />
							</div>  
							<button type="submit" className="btn btn-primary">Submit</button>
							<p className="message reg-message">Not registered? <Link to="/Register" className="reg-link nav-link">Create an Account</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;
