/*
* this components demonstrates the GET API call
* */

import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";

function GetAPI() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [id, setID] = useState(null);

    /*
    * Fetching Data With API Call
    * */

    useEffect(() => {
        getUsersList();
    }, [])

    function getUsersList() {
        fetch("http://localhost:4000/user")
            .then((result) => {
                result.json()
                    .then((response) => {
                        setData(response);
                    })
            })
    }

    function DeteleUser(id) {
        fetch(`http://localhost:4000/user/${id}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((response) => {
                getUsersList();
            })
        })
    }

    function UpdateUser(id) {
        setAge(data[id - 2].age)
        setName(data[id - 2].name)
        setUsername(data[id - 2].username)
        setID(data[id - 2].id)
    }

    function UpdateData() {
        let user = {name, username, age, id}
        fetch(`http://localhost:4000/user/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/Json',
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(user)
        }).then((response) => {
            getUsersList()
        })
    }


    /*
    * Putting Data on a Table
    * */

    return (
        <div>
            <Table striped size={"sm"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((items) =>
                        <tr key={items.id}>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.username}</td>
                            <td>{items.age}</td>
                            <td><Button variant={"warning"} size={"sm"}
                                        onClick={() => DeteleUser(items.id)}>Delete</Button></td>
                            <td><Button variant={"primary"} size={"sm"}
                                        onClick={() => UpdateUser(items.id)}>Update</Button></td>
                        </tr>
                    )
                }
                </tbody>
            </Table>

            <div>
                <h1>Update Form</h1>
                <input type={"text"} name="name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                <input type={"text"} name="username" value={username}
                       onChange={(e) => setUsername(e.target.value)}/><br/>
                <input type={"text"} name="age" value={age} onChange={(e) => setAge(e.target.value)}/><br/>
                <Button value={"Primary"} onClick={() => UpdateData()}>Save User</Button>
            </div>

        </div>

    )
}

export default GetAPI