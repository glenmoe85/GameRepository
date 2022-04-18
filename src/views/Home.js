import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

function Home() {
	return (
		<div>
			<Header />
			<form>
			<div className="form-container">
				<div className="form-container-box col-12 col-md-8 col-lg-6 col-xl-5">
					<div className="form-box card shadow-2-strong">
						<div className="card-body p-5 text-center">
							<h3>LOGIN</h3>
							<p>Please enter your credentials to login.</p>
							<div className="form-outline mb-4">
								<label for="unEmailLab" className="form-label">Email address</label>
								<input type="email" className="form-control" id="unEmail" required />
							</div>
							<div className="form-outline mb-4">
								<label for="unPasswordLab" className="form-label">Password</label>
								<input type="password" className="form-control" id="unPassword" required />
							</div>  
							<button type="submit" className="btn btn-primary">Submit</button>
							<p className="message reg-message">Not registered? <Link to="/Register" className="reg-link nav-link">Create an Account</Link></p>
						</div>
					</div>
				</div>
			</div>
			</form>
		</div>
	)
}

export default Home;
