// built by rduffy
// Creates the display of all games in the local db

import { useState } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import axios from 'axios';
import LocalGame from './LocalGame';

function LocalGames () {
    const [games, setGames] = useState([]);
    const [load, setLoad] = useState(true);

    // Automatically loads the games when page first opened
    if (load) {
        refresher();
        setLoad(false);
    }

    // call to get the game details to display
    async function refresher(){
        var response = await axios.get('http://localhost:8080/games');
        setGames(response.data.games)
    }

    return (
        <Container>
            <Row sm={12}>
                {
                games.map(function(i, index) {
                    return (
                        <Col sm={3} key={index} className="gameLibrary pt-2">
                            <LocalGame name={i.title} rating={i.rating} release={i.release} platform={i.platform} notes={i.notes} image={i.img} id={i.id}/>
                        </Col>
                    )
                })
                }
            </Row>
        </Container>
    )
}

export default LocalGames;