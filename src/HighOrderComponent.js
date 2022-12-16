import {useState} from "react";
import {Alert, Button} from "react-bootstrap";

function HighOrderComponent() {
    let [count, setCount] = useState(0)
    return
    <>
        <h1>High Order Component</h1>
        <Alert variant={"warning"}>{count}</Alert>
        <Button variant={"outline-warning"} onClick={() => setCount(count + 1)}>Hit Me</Button>
    </>
}


export default HighOrderComponent;
