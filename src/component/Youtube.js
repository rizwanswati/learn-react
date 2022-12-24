import React from "react";
import {useLocation} from 'react-router-dom'
function Youtube() {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>Yout Tube</h1>
        </div>
    )
}

export default Youtube;