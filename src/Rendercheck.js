import react from 'react'

class Rendercheck extends react.Component {
/*  checking the state first

    constructor() {
        super();
        this.state = {
            myEmail: 'rizwan.akhwandzada@gmail.com'
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.myEmail}</h3>
                <button onClick={() => this.setState({myEmail: 'rizwan.swati@hotmail.com'})}>Update Email</button>
            </div>
        )
    }
    */

    /*
    * Now checking with @Props
    * */
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h3>{this.props.email}</h3>
            </div>
        )
    }

}

export default Rendercheck;