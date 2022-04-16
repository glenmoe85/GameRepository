import React from 'react';
import Header from '../components/Header'
import Button from 'react-bootstrap/Button'

function MyGames() {
	return (
		<div>
			<Header header="MyGames" />
				<h2>Page One Page</h2>
				<Button className="success">Bootstrap check</Button>
		</div>
	)
}

export default MyGames;