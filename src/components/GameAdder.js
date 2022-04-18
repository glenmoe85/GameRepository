import { Form, Col, Row, Button } from "react-bootstrap";

function GameAdder (props) {

    function checkIt(e) {
        e.preventDefault();
        console.log(props.game.name);
    }
    if (props.game.name) {
        return (
            <div>
                <h4>Add a Game</h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Game Title:</Form.Label>
                        <Form.Control placeholder={props.game.name} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                        <Form.Label>Release Year:</Form.Label>
                        <Form.Control placeholder={props.game.release} />
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Label>Platform</Form.Label>
                        <Form.Select>
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
                        <Form.Select>
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
                        <Form.Control as="textarea"/>
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
                        <Form.Control/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                        <Form.Label>Release Year:</Form.Label>
                        <Form.Control/>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Label>Platform</Form.Label>
                        <Form.Control/>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Label>Rating</Form.Label>
                        <Form.Select>
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
                        <Form.Control as="textarea"/>
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={checkIt}>Add Game</Button>
                </Form>
            </div>
        )
    }
}

export default GameAdder;