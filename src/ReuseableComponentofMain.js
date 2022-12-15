import React from "react";

function ReuseableComponentofMain(props) {
    return (
        <tr key={props.data.key}>
            <td>{props.data.key}</td>
            <td>{props.data.name}</td>
            <td>{props.data.rolNo}</td>
            <td>{props.data.program}</td>
        </tr>
    );
}
export default ReuseableComponentofMain