import { Card, Button, ButtonGroup } from "react-bootstrap";

function LocalGame(props) {
    let rate = null;

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
console.log(props)
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name} - ({props.platform})</Card.Title>
                <Card.Text>
						<p>({props.release}) {rate}</p>
                        <p>{props.notes}</p>
                </Card.Text>
                <ButtonGroup className="justify-content-around">
                    <Button variant="success">Rate</Button>
                    <Button variant="outline-success">Notes</Button>
                    <Button variant="outline-danger">Delete</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default LocalGame;