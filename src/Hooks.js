/*
* How to use Hooks, useEffects
* with @Sates
* with @Props
* */

import React, {useEffect, useState} from "react";

function Hooks() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0);
    useEffect(() => {
        console.warn('Use Effect')
    },[count]); //deps: only useEffect only when count is updated, do nothing when count1 is updating.

    return (
        <div>
            <h1>Hooks</h1>
            <h2>count::{count}</h2>
            <h2>count1::{count1}</h2>
            <button onClick={() => setCount(count + 1)}>inc</button>
            <button onClick={() => setCount1(count1 + 1)}>inc1</button>
        </div>
    );
}

export default Hooks