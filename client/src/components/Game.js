// Built by rduffy
// Creates a search result component for when searching the online db for games

import { Card, Row, Col, Button } from "react-bootstrap";

function Game(props) {

	function dataPass(e) {
		e.preventDefault();
		props.data(props)
	}


	return (	
		<Card>
			<Card.Body>
				<Row>
					<Col sm={3}>
						<img src={props.image} className="img-fluid" />
					</Col>
					<Col sm={8}>
						<h3>{props.name}</h3>
						<p>({props.release})</p>
					</Col>
				</Row>
				<Row>
					<Button variant="success" className="col-3 mx-auto" onClick={dataPass} value={props}>Choose Game</Button>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default Game;