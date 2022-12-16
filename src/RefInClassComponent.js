/*
* @Ref :: Reference to any HTML element
* React itself discourage its use, unless needed otherwise because it directly manipulates DOM unlike react itself which
* mainpulates props and states.
* */

import {Component, createRef} from "react";
import {Button} from "react-bootstrap";
import {getValue} from "@testing-library/user-event/dist/utils";

/*
* import {useRef} for functioal component as hook
* */

class RefInClassComponent extends Component{
    constructor() {
        super();
        this.inputRef = createRef();
        /*
        * let inputRef = useRef(null) for functional component
        * */
    }
    componentDidMount() {
        console.warn(this.inputRef.current.value = "1000")
    }
    getInputValue(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color = "red"
        this.inputRef.current.style.backgroundColor = "black"
        /*inputRef.current.style.color = "red"
        inputRef.current.style.backgroundColor = "black"
        for functional component manipulation
        */
    }

    render() {
        return(
            <>
                <br/>
                <input type="text" ref={this.inputRef}/>
                <Button variant={"success"} onClick={()=>this.getInputValue()} >Click Me</Button>
            </>
        )
    }
}

export default RefInClassComponent