import { useState } from 'react'
import axios from 'axios';

function Register() {
	const [usernameReg, setUsernameReg] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const register = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:8080/users", {
			username: usernameReg,
			password: userPassword,
		}).then((response) => {
			console.log(response);
		});
		window.location.replace("/");
	};

	return (
		<div>
			<form>
				<div className="form-container">
					<div className="form-container-box col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="form-box card shadow-2-strong">
							<div className="card-body p-5 text-center">
								<h3>Register New Account</h3>
								<p>Please fill out your details below:</p>
								<div className="row">
									<div className="form-outline mb-4 col-12 col-lg-6">
										<label htmlFor="Username" className="form-label float-left">Username</label>
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
