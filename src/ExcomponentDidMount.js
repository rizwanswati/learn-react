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
            name:'Rizwan',
            count:0
        }
    }

    componentDidMount() {
        console.warn('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.warn('shouldComponentUpdate');
        if (this.state.count>5 && this.state.count<10){
            return true;
        }else{
            return false;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.warn(prevState,this.state.count)
        /*
        * Lets assume you are getting state from an API call and wanna check if previous state and new state are different
        * */

        if (this.state.count === prevState){
            console.log('Both are Same')
        }else{
            console.error('previous and new states are not same')
        }
    }


    render() {
        console.warn('render')
        return (
            <div>
                <h2>LifeCycleMethodEx::componentDidMount {this.state.name}</h2>
                <h2>count:: {this.state.count}</h2>
                <button onClick={()=>this.setState({name:'Ullah'})}>Update</button>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Incriment</button>
            </div>
        )
    }
}
export default ExcomponentDidMount;