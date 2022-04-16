import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';




function MyNavbar() {
    return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Game Database</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/MyGames">My Games</Nav.Link>
					<Nav.Link href="/AddGames">Add Games</Nav.Link>
					<Nav.Link href="/Profile">Profile</Nav.Link>
					<Nav.Link href="/Logout">Logout</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

// function Navbar() {
// 	return (
// 		<div>
// 			<nav>
// 				<Link to="/">Home</Link>|
// 				<Link to="/MyGames">My Games</Link>|
// 				<Link to="/AddGames">Add Games</Link>|
// 				<Link to="/Profile">Profile</Link>|
// 				<Link to="/Logout">Logout</Link>
// 			</nav>
// 		</div>
// 	)
// }

export default MyNavbar;