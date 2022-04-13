import {useState} from 'react'
import Header from './Header'

function GamesResults(props) {
	return (	
		<div>
			
			<h2>{props.weather}</h2>
			<h2>{props.temp}</h2>
			<hr />
			<p>{props.lat}</p>
			<p>{props.long}</p>
		</div>
	)
}

export default GamesResults;