import React from "react";
import {useNavigate} from "react-router-dom";

function About() {
    const home = useNavigate();
    const gotToHome = (url) => {
        home(url)
    }
    return <>
        <h2>About Component</h2>
        <button onClick={() => gotToHome("/home")}>go to Home page</button>
    </>
}

export default About