import {Button} from "react-bootstrap";
import React,{useRef} from "react";
import Engine from "./Engine";
function Car() {
    let inputRef = useRef(null);
    function updateInput(){
        inputRef.current.value = "1000";
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="yellow"
    }
    return(
      <>
          <br/>
        <h1>Forward Reference</h1>
        <Engine ref={inputRef} />
        <Button variant={"warning"} onClick={updateInput}> Hit Me </Button>
      </>
    );
}

export default Car;