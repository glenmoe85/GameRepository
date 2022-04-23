import { useState } from 'react'
import axios from 'axios';
import { Form, Col, Row, Button } from "react-bootstrap";

function GameAdder (props) {
    const [name, setName] = useState("");
    const [release, setRelease] = useState(0);
    const [platform, setPlatform] = useState("");
    const [rating, setRating] = useState(null);
    const [notes, setNotes] = useState(null);

    function addName(e) {
            e.preventDefault();
            setName(e.target.value)
            console.log("It fucking went here")
    }

    function addrelease(e) {
        e.preventDefault();
        setRelease(e.target.value)
    }

    function addPlatform(e) {
        e.preventDefault();
        setPlatform(e.target.value);
    }

    function addRating(e) {
        e.preventDefault();
        if (e.target.value === "*"){
            setRating(1)
        } else if (e.target.value === "**"){
            setRating(2)
        } else if (e.target.value === "***"){
            setRating(3)
        } else if (e.target.value === "****"){
            setRating(4)
        } else if (e.target.value === "*****"){
            setRating(5)
        } else {
            setRating(null)
        }
    }

    function addNotes(e) {
        e.preventDefault();
        setNotes(e.target.value)
    }

    async function checkIt(e) {
        e.preventDefault();
        console.log("start: " + name)
        let title = "";
        let device = "";
        let year = 0;
        let extRef = null;
        if (name === "" && props.game.name) {
            console.log("before set: " + name)
            console.log("pre-set props: " + props.game.name)
            title = props.game.name;
            console.log("after set: " + name)
            extRef = props.game.extRef;
        } else if (name) {
            title = name;
        }
        if (release === 0 && props.game.release) {
            year = props.game.release
        } else if (release) {
            year = release
        }
        if (platform === "" && props.game.platform) {
            device = props.game.platform[0].platform.name
        } else if (platform) {
            device = platform
        }
        console.log("before pass: " + name)
        if (window.confirm("Are you sure you want to add " + title + " to your library?")) {
            await axios.post("http://localhost:8080/games", {name: title, release: year, platform: device, rating: rating, notes: notes, extRef: extRef})
            .then(function (response) {
            console.log(response);
            alert("Game added successfully")
            })
            .catch(function (error) {
            console.log(error);
            alert("Failed to add game. Try again later.")
            })
            setName("");
            setRelease(0);
            setPlatform("");
            setRating(null);
            setNotes(null);
            extRef = null;
            window.location.reload(false);
        }
    }

    if (props.game.name) {
        return (
            <div>
                <h4>Add a Game</h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Game Title:</Form.Label>
                        <Form.Control required placeholder={props.game.name} type="text" onChange={addName}/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Release Year:</Form.Label>
                            <Form.Control required placeholder={props.game.release} type="number" onChange={addrelease}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Platform</Form.Label>
                            <Form.Select required onChange={addPlatform}>
                            {
                                props.game.platform.map(function(i, index) {
                                    return (
                                        <option key={index}>{i.platform.name}</option>
                                    )
                                })
                            }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Rating</Form.Label>
                            <Form.Select onChange={addRating}>
                                <option></option>
                                <option>*</option>
                                <option>**</option>
                                <option>***</option>
                                <option>****</option>
                                <option>*****</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control onChange={addNotes} as="textarea"/>
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={checkIt}>Add Game</Button>
                </Form>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Add a Game</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Game Title:</Form.Label>
                        <Form.Control required onChange={addName} type="text"/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                        <Form.Label>Release Year:</Form.Label>
                        <Form.Control required onChange={addrelease} type="number"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Label>Platform</Form.Label>
                        <Form.Control required onChange={addPlatform} type="text"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Label>Rating</Form.Label>
                            <Form.Select onChange={addRating}>
                                <option></option>
                                <option>*</option>
                                <option>**</option>
                                <option>***</option>
                                <option>****</option>
                                <option>*****</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control onChange={addNotes} as="textarea"/>
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={checkIt}>Add Game</Button>
                </Form>
            </div>
        )
    }
}

export default GameAdder;