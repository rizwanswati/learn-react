import logo from './logo.svg';
import './App.css';
import PreviousState from "./component/PreviousState";
import {useState} from "react";
import {Button} from "react-bootstrap";
import PreviousProps from "./component/PreviousProps";

function App() {
    const [count, setCount] = useState(1);

    function update() {
        setCount((PreviousValue) => {
            return Math.floor(Math.random() * 10)
        })
    }

    return (
        <div className="App">
            <h1>React Previous State/Props</h1>
            <PreviousState/>
            <PreviousProps count={count}/>
            <Button variant={"outline-primary"} onClick={() => update()}>Previous Val of Count</Button>
        </div>
    );
}

export default App;
