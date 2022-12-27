/*
* React limitations make it impossible to store previous value in a variable and access it later. so react has provided
* another way of getting the previous values throw state magic functions
* */


import {useState} from "react";
import {Button} from "react-bootstrap";

export default function PreviousState() {

    const [count, setCount] = useState(1);

    function update() {
        setCount((PreviousValue) => {
            console.log(PreviousValue)
            return Math.floor(Math.random() * 10)
        })
    }

    return (
        <div>
            <h2>count::{count}</h2>
            <Button variant={"outline-primary"} onClick={() => update()}>Previous Val of Count</Button>
        </div>
    )
}