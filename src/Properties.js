import React from "react";

function properties(data) {
    return (<div>
            <h1>Name:= {data.name}</h1>
            <h2>Phone:= {data.phone}</h2>
            <h3>Others:= {data.others.address}</h3>
        </div>);
}

export default properties;