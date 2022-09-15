import React, {useState} from "react";

function Toggle(){
    const [state,setState] = useState(true)
    return (
        <div>
            {
                state?
                    <h1>Toggle Button</h1>
                    :null
            }
            <button onClick={()=>setState(!state)}>Toggle</button>
        </div>
    );
}

export default Toggle;