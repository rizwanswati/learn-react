import {ConsumerContext} from "./ConsumerContext";

function Header() {
    return (
        <div>
            <ConsumerContext.Consumer>
                {
                    ({color}) => (
                        <h1 style={{backgroundColor: color}}>Header Component</h1>
                    )
                }
            </ConsumerContext.Consumer>
        </div>
    )
}

export default Header