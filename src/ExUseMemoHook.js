import React, {useMemo, useState} from "react";
import {Button} from "react-bootstrap";
/*
* useMemo
* Cases: when there is a tiny little change in value across whole componenet, whoel component re-renders
* this will cause performance issues if that component have several utility functions which should not be called on each value update on
* re-rendering. but they do get called, since component has to re-render.
* to solve this issue, useMemo Hook is used in functional component.
* */

function ExUseMemoHook(){
    const[count,setCount] = useState(0);
    const [index,setIndex] = useState(10);

    let getMultipleResultsOfCount = useMemo(function multiply() {
        console.info('useMemo')
        return count * 5;
    },count)

    function getMultiple(){
        console.info('Non Memo Function')
        return count * 5;
    }

    return(
      <>
        <h1>count::{count}</h1>
          <h1>index::{index}</h1>
          <h1>Multiple Of Count::{getMultipleResultsOfCount}</h1>
          <h1>Open Count::{getMultiple()}</h1>

          <Button variant="success" onClick={()=>setCount(count+1)}>Inc Count</Button>
          <Button variant="success" onClick={()=>setIndex(index * 5)}>Inc Index</Button>
      </>
    );
}

export default ExUseMemoHook
