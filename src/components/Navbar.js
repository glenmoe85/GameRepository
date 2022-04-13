import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>|
				<Link to="/PageOne">PageOne</Link>|
				<Link to="/PageTwo">PageTwo</Link>|
				<Link to="/PageThree">PageThree</Link>|
				<Link to="/PageFour">PageFour</Link>|
				<Link to="/Games">Games</Link>|
			</nav>
		</div>
	)
}

export default Navbar