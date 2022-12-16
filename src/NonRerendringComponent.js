import React from "react";
import {Button} from "react-bootstrap";

class NonRerendringComponent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1,
            index : 0
        }
    }

    render() {
        console.info('re-rendering') // re-rendering because value of count is updating on each click
        // if we dont change value of count, then this component will not re-render.
        return (
            <>
            <h2>count::{this.state.count}</h2>
                <h2>Index:: {this.state.index}</h2>
                <Button variant="danger" onClick={()=>this.setState({count:1})}>Hit counter</Button>
                <Button variant="danger" onClick={()=>this.setState({index: this.state.index+1})}>Hit index</Button>
            </>
        );
    }
}

export default NonRerendringComponent