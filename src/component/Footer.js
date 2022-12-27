import {ConsumerContext} from "./ConsumerContext";

function Footer() {
    return (
        <div>
            <ConsumerContext.Consumer>
                {
                    ({color}) => (
                        <h1 style={{backgroundColor: color}}>Footer Component</h1>
                    )
                }
            </ConsumerContext.Consumer>
        </div>
    )
}

export default Footer