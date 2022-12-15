import {Button} from "react-bootstrap";

function LiftingUpTheStateChild(data) {
    const name = 'rizwan'
    return (
        <>
            <Button variant="Black" onClick={()=>data.method(name)}>Click Me</Button>
        </>
    )
}

export default LiftingUpTheStateChild