import {useState, useEffect } from 'react'
import	axios from 'axios'
import GamesResults from './GamesResults';

function Games() {
	const [long, setLong] = useState(0)
	const [lat, setLat] = useState(0)
	const [loc, setLoc] = useState(0)
	const [error, setError] = useState('')
	const [weather, setWeather] = useState('')
 	const [temp, setTemp] = useState('')


	useEffect(async function() {
		if(!("geolocation" in navigator)) {
			setError('geolocation is not available')
		}
		navigator.geolocation.getCurrentPosition(async function(pos) {
			var response
			setLat(pos.coords.latitude)
			setLong(pos.coords.longitude)
			

		try {
			response = await axios("http://api.openweathermap.org/data/2.5/weather", {
				params: {
					mode: 'json',
					lat: pos.coords.latitude,
					lon: pos.coords.longitude,
					appid: "a9987845c80c933c697521142e6fce7e"
				}
			})
			setTemp(response.data.main.feels_like)
			setWeather(response.data.weather[0].description)
			setLoc(response.data.name)
			console.log(response.data)
			console.log(response.data.main.feels_like)
		} 
		catch(e) {
			if(e.response.status === 404){
				setError("Could not retrieve weather")
			}
			else {
				setError("Weather data couldnt be retrieved")
			}
		}
	}, function(err) {
			setError("User denied geo access")
		})
	}, [])


	if(weather) {
		return (
			<div>
			<GamesResults weather={weather} temp={temp} lat={lat} long={long} loc={loc} />
			</div>
		)
	} 
	else if (error) {
		return (
     	 <div>{error}</div>
   		 )
 	 } 
	 else {
    	return (
      		<div>
        		loading
      		</div>
    	)
  	}
}

export default Games