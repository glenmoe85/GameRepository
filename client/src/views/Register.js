import React from 'react'
import {Link} from 'react-router-dom'

function Register() {
	return (
		<div>
			<form>
			<div className="form-container">
				<div className="form-container-box col-12 col-md-8 col-lg-6 col-xl-5">
					<div className="form-box card shadow-2-strong">
						<div className="card-body p-5 text-center">
							<h3>Register New Account</h3>
							<p>Please fill out your details below;</p>
							<div className="row">
							<div className="form-outline mb-4 col-12 col-lg-6">
								<label for="fNameLab" className="form-label float-left">Name</label>
								<input type="text" className="form-control" placeholder="Joe" id="fName" required/>
							</div>
							<div className="form-outline mb-4 col-12 col-lg-6">
								<label for="lNameLab" className="form-label float-left">Last Name</label>
								<input type="text" className="form-control" id="lName" placeholder="Bloggs" required />
							</div>
							</div>
							<div className="row">
							<div className="form-outline mb-4 col-12 col-lg-6">
								<label for="emailLab" className="form-label float-left">Email</label>
								<input type="email" className="form-control" id="email" placeholder="joe@email.com" required />
							</div>							
							<div className="form-outline mb-4 col-12 col-lg-6">
								<label for="phoneLab" className="form-label float-left">Phone</label>
								<input type="number" className="form-control" id="phone"  placeholder="123-45-678" required/>
							</div>
							</div>
							<div className="row">
							<div className="form-outline mb-4 col-12 col-lg-6">
								<label for="uNameLab" className="form-label float-left">User Name</label>
								<input type="text" className="form-control" id="uName" placeholder="Username" required />
							</div>
							<div className="form-outline mb-4 col-12 col-lg-6">
								<label for="unPasswordLab" className="form-label float-left">Password</label>
								<input type="password" className="form-control" id="unPassword" placeholder="Password" required />
							</div>  
							</div>							
							<button type="submit" className="btn btn-primary">Create Account</button>
						</div>
					</div>
				</div>
			</div>
			</form>
		</div>
	)
}

export default Register;
