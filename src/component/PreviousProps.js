import {Button} from "react-bootstrap";
import {useEffect, useRef} from "react";

export default function PreviousProps(props) {
    let previousProps = useRef();
    useEffect(() => {
        previousProps.current = props.count
    })
    const prev = previousProps.current;
    return (
        <div>
            <h2>Current Props::{props.count}</h2>
            <h2>Previous Props::{prev}</h2>
        </div>
    )
}