import { useState } from 'react'
import axios from 'axios';
import { Form, Col, Row, Button } from "react-bootstrap";
import Modals from './Modals';

function GameAdder (props) {
    const [name, setName] = useState("");
    const [release, setRelease] = useState(0);
    const [platform, setPlatform] = useState("");
    const [img, setImg] = useState("");
    const [rating, setRating] = useState(null);
    const [notes, setNotes] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [whichButton, setWhichButton] = useState(null);
    
    function handleModal(e) {
        e.preventDefault();
        if (name || props.game.name) {
            setModalShow(true);
            setWhichButton(e.target.id);
            if (!name) {
                setName(props.game.name);
            }
            if (!release) {
                setRelease(props.game.release);
            }
            if (!platform) {
                setPlatform(props.game.platform[0].platform.name);
            }
            if (!img) {
                setImg(props.game.image);
            }
        }
    }

    function addName(e) {
            e.preventDefault();
            setName(e.target.value)
    }

    function addImg(e) {
            e.preventDefault();
            setImg(e.target.value)
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

    if (props.game.name) {
        return (
            <div>
            <Modals
              show={modalShow}
              button_id={whichButton}
              title={name}
              notes={notes}
              rating={rating}
              platform={platform}
              release={release}
              img={img}
              onHide={() => setModalShow(false)}
            />
                <h4>Add a Game</h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Game Title:</Form.Label>
                        <Form.Control required placeholder={props.game.name} type="text" onChange={addName}/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Release Year:</Form.Label>
                            <Form.Control required type="number" placeholder={props.game.release} onChange={addrelease}/>
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
                        <Form.Label>Enter Image URL:</Form.Label>
                        <Form.Control required type="text" placeholder={props.game.image} onChange={addImg}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control rows={3} onChange={addNotes} as="textarea"/>
                    </Form.Group>
                    <Button variant="success" id="Add" onClick={handleModal}>Add Game</Button>
                </Form>
            </div>
        )
    } else {
        return (
            <div>
            <Modals
              show={modalShow}
              button_id={whichButton}
              title={name}
              notes={notes}
              rating={rating}
              platform={platform}
              release={release}
              img={img}
              onHide={() => setModalShow(false)}
            />
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
                        <Form.Label>Enter Image URL:</Form.Label>
                        <Form.Control required type="text" onChange={addImg}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control rows={3} onChange={addNotes} as="textarea"/>
                    </Form.Group>
                    <Button variant="success" id="Add" onClick={handleModal}>Add Game</Button>
                </Form>
            </div>
        )
    }
}

export default GameAdder;