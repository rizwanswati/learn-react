/*
* POST demonstration in React.Js
* */
import {useState} from "react";
import {Button} from "react-bootstrap";

function PostAPI() {
    /*
    * State binding Variables
    * */
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    function PostData() {

        let data = {name, username, age};
        /*
        * Post method would go here
        * */
        fetch("http://localhost:4000/user", {
            method: "POST",
            headers: {
                'Accept': 'application/Json',
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
            <h1>Registration Form</h1>
            <input type={"text"} value={name} name="name" onChange={(e) => setName(e.target.value)}/><br/>
            <input type={"text"} value={username} name="username" onChange={(e) => setUsername(e.target.value)}/><br/>
            <input type={"text"} value={age} name="age" onChange={(e) => setAge(e.target.value)}/><br/>
            <Button value={"Primary"} onClick={() => PostData()}>Save User</Button>
        </div>
    )
}

export default PostAPI