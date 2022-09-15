import {useState} from "react";


function State() {
    const [data,setData] = useState(0);
    function update() {
        setData(data + 1)
    }
    console.info("_____________")
    return (
        <div>
            <h3>{data}</h3>
            <button onClick={()=>update()}>Update</button>
        </div>

    );
}

export default State;