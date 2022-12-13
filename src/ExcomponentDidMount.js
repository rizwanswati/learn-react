import react from "react";
class ExcomponentDidMount extends react.Component{
    /*
    * Life cycle Methods
    * @Constructor
    * @Render
    * @ComponentDidMount
    * @state and @props have no effects on componentDidMount method
    * */

    constructor() {
        super();
        console.warn('Constructor')
        this.state = {
            name:'Rizwan'
        }
    }

    componentDidMount() {
        console.warn('componentDidMount')
    }

    render() {
        console.warn('render')
        return (
            <div>
                <h2>LifeCycleMethodEx::componentDidMount {this.state.name}</h2>
                <button onClick={()=>this.setState({name:'Ullah'})}>Update</button>
            </div>
        )
    }
}
export default ExcomponentDidMount;