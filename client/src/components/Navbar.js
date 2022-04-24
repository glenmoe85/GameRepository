import { Navbar, Nav, Container } from "react-bootstrap";
import logo64 from '../images/logo64.png';

function NavbarAcc() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="/"><img src={logo64} height="30"/></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto align-items-end">
						<Nav.Link href="/addgames">Add Games</Nav.Link>
						<Nav.Link href="/logout">Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarAcc