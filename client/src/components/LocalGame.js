import { useState } from 'react';
import { Card, Button, ButtonGroup, Col } from "react-bootstrap";
import Modals from './Modals';

function LocalGame(props) {
    const [modalShow, setModalShow] = useState(false);
    const [modalGame, chooseModalGame] = useState(null);
    const [whichButton, setWhichButton] = useState(null);
    const [title, setTitle] = useState(null);
    const [notes, setNotes] = useState(null)
    const [rating, setRating] = useState(null);
    let rate = null;
    
    function handleModal(e) {
        e.preventDefault();
        setModalShow(true);
        chooseModalGame(e.target.attributes.game_id.value);
        setWhichButton(e.target.attributes.id.value);
        setTitle(e.target.attributes.title.value);
        if (e.target.attributes.notes) {
            setNotes(e.target.attributes.notes.value);
        }
        if (e.target.attributes.rating) {
            setRating(e.target.attributes.rating.value);
        }
    }

    if (props.rating === 1) {
        rate = "*"
    } else if (props.rating === 2) {
        rate = "**"
    } else if (props.rating === 3) {
        rate = "***"
    } else if (props.rating === 4) {
        rate = "****"
    } else if (props.rating === 5) {
        rate = "*****"
    }

    return (
        <Card className="h-100">
        <Modals
          show={modalShow}
          game_id={modalGame}
          button_id={whichButton}
          title={title}
          notes={notes}
          rating={rating}
          onHide={() => setModalShow(false)}
        />
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.name} - ({props.platform})</Card.Title>
                <Card.Text>
                    ({props.release}) {rate}<br/>
                    <br/>
                    {props.notes}
                </Card.Text>
                <ButtonGroup className="mt-auto flex-column flex-lg-row">
                    <Button variant="success" game_id={props.id} id="Rate" title={props.name} rating={props.rating} onClick={handleModal}>Rate</Button>
                    <Button variant="outline-success" game_id={props.id} id="Notes" title={props.name} notes={props.notes} onClick={handleModal}>Notes</Button>
                    <Button variant="outline-danger" game_id={props.id} id="Delete" title={props.name} onClick={handleModal}>Delete</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default LocalGame;