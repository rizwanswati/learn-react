import React, {useState} from "react";

function ConditionalRendering() {
    const [condition, setCondition] = useState(1);
    let check = true
    function changeState() {
        console.warn(condition);
        if (condition <= 3 && check){
            setCondition(condition+1);
        }else{
            check = false
            if (condition == 1){
                check = true;
            }else{
                setCondition(condition - 1);
            }
        }
    }

    return (
        <div>
            { // jsx brackets
                condition == 1 ? <h1>Learning ReactJs</h1>
                    : condition == 2 ? <h2>Half Done</h2>
                        : <h3>Done</h3>
            }
            <button onClick={()=>changeState()}>Change Learning State</button>
        </div>
    );
}

export default ConditionalRendering;