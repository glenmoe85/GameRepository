import { Redirect } from 'react-router-dom'

function Logout() {
	return (
		<div>
				<h1>You are now being re-directed</h1>
					<Redirect to="/" />			
		</div>
	)
}

export default Logout;