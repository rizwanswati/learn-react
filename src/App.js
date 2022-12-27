import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function App() {
    const [data, setData] = useState(
        {name: "Rizwan", age: "30"}
    )
    return (
        <div className="App">
            <h1>State Object</h1>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
            <input type={"text"} value={data.name} name={"name"}
                   onInput={(e) => setData({...data, name: e.target.value})}/>
            <input type={"text"} value={data.age} name={"age"}
                   onInput={(e) => setData({...data, age: e.target.value})}/>
        </div>
    );
}

export default App;
