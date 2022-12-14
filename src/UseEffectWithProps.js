import React, {useEffect} from "react";

function UseEffectWithProps(props) {

    useEffect(()=>{
        console.info('useEffect on Props Called')
    },[props.dataa])

    return (
        <div>
            <h2>counter::{props.count}</h2>
            <h2>data::{props.dataa}</h2>
        </div>
    );
}

export default UseEffectWithProps;