import React from "react";
import {Link, NavLink} from "react-router-dom";

function NaBar() {
    return (
        <div>
            {/*<ListGroup as="ul">
                <ListGroup.Item as="li"><Link to="/Home">Home</Link></ListGroup.Item>
                <ListGroup.Item as="li"><Link to="/user/Rizwan/Ullah">Rizwan</Link></ListGroup.Item>
                <ListGroup.Item as="li"><Link to="/user/Mudasssar/Sarfraz">Mudassar</Link></ListGroup.Item>
                <ListGroup.Item as="li"><Link to="/">About</Link></ListGroup.Item>
                <ListGroup.Item as="li"><Link to="/contact">Contact Us</Link></ListGroup.Item>
            </ListGroup>*/}

            {/*
                since className cannot be added with Link, therefore, NavLink is used instead
            */}
            <ul className="myNavBar">
                <li><NavLink className="nav-bar-link" style={({isActive}) => {
                    return {backgroundColor: isActive ? "green" : "red"}
                }} to={"/Home"}>Home</NavLink></li>
                <li><NavLink className="nav-bar-link" style={({isActive}) => {
                    return {backgroundColor: isActive ? "green" : "red"}
                }} to={"/"}>About</NavLink></li>
                <li><NavLink className="nav-bar-link" style={({isActive}) => {
                    return {backgroundColor: isActive ? "green" : "red"}
                }} to={"/*"}>Contact</NavLink></li>
            </ul>

        </div>
    )
}

export default NaBar