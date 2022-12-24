import React from "react";
import {Link, Outlet} from "react-router-dom"

function Companies() {
    return (
        <div>
            <h1>Companies</h1>
            <Link to="youtube">YouTube</Link>
            <Link to="google">Google</Link>
            <Link to="meta">Meta</Link>
            <Outlet/>
        </div>
    )
}

export default Companies;