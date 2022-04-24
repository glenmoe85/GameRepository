import { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Col, Row } from "react-bootstrap";

function Modals(props) {
    const [notesUpdate, setNotesUpdate] = useState(null);
    const [rateUpdate, setRateUpdate] = useState(null);
console.log(props);
    async function handleDelete(e) {
        await axios.delete('http://localhost:8080/games', {data: {game_id: props.game_id}});
        window.location.reload(false);
        props.onHide();
    }

    function notesInput(e) {
      e.preventDefault()
      setNotesUpdate(e.target.value)
      console.log(e.target.value)
    }

    async function handleNotes() {
        if (notesUpdate) {
            await axios.patch('http://localhost:8080/games', {game_id: props.game_id, notes: notesUpdate});
        } else  {
            await axios.patch('http://localhost:8080/games', {game_id: props.game_id, notes: props.notes});
        }
        window.location.reload(false);
        props.onHide();
    }

    function rateInput(e) {
        console.log("Henlo")
        if (e.target.value === "*"){
            setRateUpdate(1)
        } else if (e.target.value === "**"){
            setRateUpdate(2)
        } else if (e.target.value === "***"){
            setRateUpdate(3)
        } else if (e.target.value === "****"){
            setRateUpdate(4)
        } else if (e.target.value === "*****"){
            setRateUpdate(5)
        } else {
            setRateUpdate(null)
        }
    }

    async function handleRate() {
        if (rateUpdate) {
            await axios.patch('http://localhost:8080/games', {game_id: props.game_id, rating: rateUpdate});
        } else  {
            await axios.patch('http://localhost:8080/games', {game_id: props.game_id, rating: props.rating});
        }
        window.location.reload(false);
        props.onHide();
    }

    async function handleAdd() {
      await axios.post("http://localhost:8080/games", {name: props.title, release: props.release, platform: props.platform, rating: props.rating, notes: props.notes, img: props.img})
      .then(function (response) {
      console.log(response);
      console.log("Game added successfully")
      window.location.replace("/mygames");
      })
      .catch(function (error) {
      console.log(error);
      alert("Failed to add game. Try again later.")
      })
      props.onHide();
    }

    if (props.button_id === "Delete") {
        return (
            <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Are you sure you want to delete {props.title} from your library?
              </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={props.onHide}>No</Button>
              <Button variant="danger" onClick={handleDelete}>Yes</Button>
            </Modal.Footer>
          </Modal>
        );
    } else if (props.button_id === "Rate") {
        return (
            <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Change Rating
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" >
                <Form.Select onChange={rateInput}>
                    <option></option>
                    <option>*</option>
                    <option>**</option>
                    <option>***</option>
                    <option>****</option>
                    <option>*****</option>
                </Form.Select>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-success" onClick={props.onHide}>Cancel</Button>
              <Button variant="success" onClick={handleRate}>Save</Button>
            </Modal.Footer>
          </Modal>
        );
    } else if (props.button_id === "Notes") {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Edit Notes for {props.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Control as="textarea" rows={3} onChange={notesInput}>{props.notes}</Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-success" onClick={props.onHide}>Cancel</Button>
              <Button variant="success" onClick={handleNotes}>Save</Button>
            </Modal.Footer>
          </Modal>
        );
    } else if (props.button_id === "Add") {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Are you sure you want to add {props.title} to your library? 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row sm={12}>
                <Col sm={6}>Release: {props.release} - {props.platform}<br/>
                  Rating: {props.rating}<br/>
                  Notes:<br/>
                  {props.notes}
                </Col>
                <Col sm={4} className="ms-auto">
                  <img className="w-75" src={props.img}/>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-success" onClick={props.onHide}>Cancel</Button>
              <Button variant="success" onClick={handleAdd}>Save</Button>
            </Modal.Footer>
          </Modal>
        );
    } else {
      return (
        <Modal/>
      )
    }
  }

  export default Modals;