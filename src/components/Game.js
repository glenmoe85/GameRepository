import { Card, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';
import Games from './Games';

function Game(props) {
	const [chosenGame, setChosenGame] = useState({});

	function dataPass(e) {
		e.preventDefault();
		setChosenGame(props);
		props.data(chosenGame)
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
					<Button className="col-3 mx-auto" onClick={dataPass} value={props}>Add Game</Button>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default Game;