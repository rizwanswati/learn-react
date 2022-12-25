/*
* this components demonstrates the GET API call
* */

import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";

function GetAPI() {
    const [data, setData] = useState([]);

    /*
    * Fetching Data With API Call
    * */

    useEffect(() => {
        fetch("http://localhost:4000/user")
            .then((result) => {
                result.json()
                    .then((response) => {
                        setData(response);
                    })
            })
    }, [])
    /*
    * Putting Data on a Table
    * */

    return (
        <div>
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Age</th>
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
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default GetAPI