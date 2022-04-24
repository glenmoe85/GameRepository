// Built by gmorris and poliver, with some edits by rduffy to link it to the db

import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import LocalGames from '../components/LocalGames';

function Home() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [loginStatus, setLoginStatus] = useState("");
	const [loginSuccess, setLoginSuccess] = useState(false);

	const login = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:8080/users/login", {
			username: username,
			pass: password,
		}).then((response) => {
			console.log(response.data)
			if (response.data.message){
				setLoginStatus(response.data.message)
			} else {
				setLoginSuccess(true)
			}
		});
	};

	return (
		<>
			{loginSuccess ? (
				<div>
					<LocalGames/>			
				</div>
			) : (
			<div>
				<form>
					<div className="form-container">
						<div className="form-container-box col-12 col-md-8 col-lg-6 col-xl-5">
							<div className="form-box card shadow-2-strong">
								<div className="card-body p-5 text-center">
									<h3>LOGIN</h3>
									<p>Please enter your credentials to login.</p>
									<div className="form-outline mb-4">
										<label htmlFor="Username" className="form-label">Username</label>
										<input type="text" onChange={(e) => { setUsername(e.target.value)}} className="form-control" id="username" required />
									</div>
									<div className="form-outline mb-4">
										<label htmlFor="Password" className="form-label">Password</label>
										<input type="password" onChange={(e) => { setPassword(e.target.value)}} className="form-control" id="password" required />
									</div>  
									<button onClick={login} type="submit" className="btn btn-primary">Submit</button>
									<p className="message reg-message">Not registered? <Link to="/Register" className="reg-link nav-link">Create an Account</Link></p>
								</div>
								<div className="alert alert-light text-center">{loginStatus}</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			)}
		</>
	)
}

export default Home;
