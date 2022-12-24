import React from "react";
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";

function NaBar() {
    return (
        <di>
            <ListGroup as="ul">
                <ListGroup.Item as="li"><Link to="/Home">Home</Link></ListGroup.Item>
                <ListGroup.Item as="li"><Link to="/">About</Link></ListGroup.Item>
                <ListGroup.Item as="li"><Link to="/contact">Contact Us</Link></ListGroup.Item>
            </ListGroup>
        </di>
    )
}

export default NaBar