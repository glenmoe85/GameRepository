import { useState } from 'react'
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import axios from 'axios';
import Game from './Game';
import GameAdder from './GameAdder';

function Games() {
const [search, setSearch] = useState('');
const [games, setGames] = useState([]);
const [chosenGame, setChosenGame] = useState({});

function gameCallback(e) {
    setChosenGame(e);
}

function handleSearchQuery(e) {
  e.preventDefault()
  setSearch(e.target.value)
}

async function searchGames(e) {
  e.preventDefault()
  var response = await axios.get('https://api.rawg.io/api/games', {params: { key: "11c0adf92b2b468a8a275b97549ccfde", search: search}})
  setGames(response.data.results)
  console.log(response.data.results)
}

    return (
        <Container>
            <Row sm={12}>
                <Col sm={5}>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Search" type="text" onChange={handleSearchQuery} />
                            </Col>
                            <Col>
                                <Button type="submit" onClick={searchGames}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                    <GameAdder game={chosenGame}/>
                    
                </Col>
                <Col sm={7}>
                    <ul>
                        {
                        games.map(function(i, index) {
                            return (
                                <li key={index} className="gameList">
                                    <Game name={i.name} image={i.background_image} release={new Date(i.released).getFullYear()} platform={i.parent_platforms} data={gameCallback}/>
                                </li>
                            )
                        })
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Games;