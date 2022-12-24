import React from "react";
import {useNavigate} from "react-router-dom"

function Home() {
    const about = useNavigate();
    const gotToAbout = (url) => {
        about(url)
    }
    return <>
        <h2>Home Component</h2>
        <button onClick={() => gotToAbout("/")}>go to about page</button>
    </>
}

export default Home;