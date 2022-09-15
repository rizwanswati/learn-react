import React,{Component} from "react";
export default class Statewithclass extends Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
    }

    update(){
        this.setState({data:this.state.data+1})
        console.log('clicked')
    }

    render() {
        return (
          <div>
              <h1>{this.state.data}</h1>
              <button onClick={()=>this.update()}>Click to Update</button>
          </div>
        );
    }
}