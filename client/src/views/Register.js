import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Register() {

	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPhone, setUserPhone] = useState("");
	const [usernameReg, setUsernameReg] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const register = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:3001/register", {
			fname: userFirstName,
			lname: userLastName,
			email: userEmail,
			phone: userPhone,
			username: usernameReg,
			password: userPassword,
		}).then((response) => {
			console.log(response);
		});
	};

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
									<label htmlFor="FName" className="form-label float-left">Name</label>
									<input type="text" onChange={(e) => { setUserFirstName(e.target.value)}} className="form-control" placeholder="Joe" id="fName" required/>
								</div>
								<div className="form-outline mb-4 col-12 col-lg-6">
									<label htmlFor="LName" className="form-label float-left">Last Name</label>
									<input type="text" onChange={(e) => { setUserLastName(e.target.value)}} className="form-control" id="lName" placeholder="Bloggs" required />
								</div>
								</div>
								<div className="row">
								<div className="form-outline mb-4 col-12 col-lg-6">
									<label htmlFor="Email" className="form-label float-left">Email</label>
									<input type="email" onChange={(e) => { setUserEmail(e.target.value)}} className="form-control" id="email" placeholder="joe@email.com" required />
								</div>							
								<div className="form-outline mb-4 col-12 col-lg-6">
									<label htmlFor="Phone" className="form-label float-left">Phone</label>
									<input type="number" onChange={(e) => { setUserPhone(e.target.value)}} className="form-control" id="phone"  placeholder="123-45-678" required/>
								</div>
								</div>
								<div className="row">
								<div className="form-outline mb-4 col-12 col-lg-6">
									<label htmlFor="Username" className="form-label float-left">User Name</label>
									<input type="text" onChange={(e) => { setUsernameReg(e.target.value)}} className="form-control" id="uName" placeholder="Username" required />
								</div>
								<div className="form-outline mb-4 col-12 col-lg-6">
									<label htmlFor="Password" className="form-label float-left">Password</label>
									<input type="password" onChange={(e) => { setUserPassword(e.target.value)}} className="form-control" id="unPassword" placeholder="Password" required />
								</div>  
							</div>							
							<button onClick={register} type="submit" className="btn btn-primary">Create Account</button>
						</div>
					</div>
				</div>
			</div>
			</form>
		</div>
	)
}

export default Register;
