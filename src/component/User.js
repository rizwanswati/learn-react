/*
* Get Url Parameters and show here
* */
import {useParams} from "react-router-dom"

function User() {
    const {name, last} = useParams();


    return (<div>
        <p>This is {name} Page</p><br/>
        <p>Names {last} Taken from URL parameters</p>
    </div>)
}

export default User