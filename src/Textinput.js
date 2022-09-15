import React, {useState} from "react";

function Textinput() {
    const [text, setText] = useState(null)
    const [data, setData] = useState(false)

    function showData(val) {
        setText(val.target.value)
        setData(null)
    }

    return (
        <div>
            <div>{
                data ?
                    <h1>{text}</h1>
                    : null
            }</div>
            <h2>{text}</h2>
            <input type={"text"} onChange={showData}/>
            <button onClick={()=>setData(true)}>Hit Me</button>
        </div>
    );
}

export default Textinput;