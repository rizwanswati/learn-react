import {Table} from "react-bootstrap";
import React from "react";
import ReuseableComponentofMain from "./ReuseableComponentofMain";

function MainComponent() {
    const student = [
        {
            key: 1,
            name: 'Amin',
            rolNo: 'BBA-14',
            program: 'BBA-Hons'
        },
        {
            key: 2,
            name: 'Nafees',
            rolNo: 'B.Com',
            program: 'BS Commerce'
        },
    ];

    return (
        <di>
            <Table striped hover variant="dark" size="sm">
                <thead>
                <th>Key</th>
                <th>Name</th>
                <th>RolNo</th>
                <th>Program</th>
                </thead>
                <tbody>

                {
                    student.map((items,index) =>
                        <ReuseableComponentofMain data={items} />
                    )
                }
                </tbody>
            </Table>
        </di>
    );
}

export default MainComponent;