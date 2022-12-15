import React from "react";
import {Table} from "react-bootstrap";

function ArrayListTableMapFunction() {
    const student = [
        {
            key: 1,
            name: 'Usama',
            rolNo: 'BCV-14',
            program: 'BE-Civil'
        },
        {
            key: 2,
            name: 'Rizwan',
            rolNo: 'BSE-232',
            program: 'BE-Software'
        },
    ];

    /*
    * For nested array, use item.nesteditem.variableNames
    * */

    return (
        <div>
            <Table striped hover variant="dark" size="sm">
                <tr>
                <td>Key</td>
                <td>Name</td>
                <td>RolNo</td>
                <td>Program</td>
                </tr>
                <tbody>

                {
                    student.map((items) =>
                        <tr key={items.key}>
                            <td>{items.key}</td>
                            <td>{items.name}</td>
                            <td>{items.rolNo}</td>
                            <td>{items.program}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    );
}

export default ArrayListTableMapFunction;