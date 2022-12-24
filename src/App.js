import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NaBar from "./component/NaBar";
import User from "./component/User";
import ErrorPage404 from "./ErrorPage404";

function App() {
    return (
        <div className="App">
            <h1>Learning react</h1>
            <BrowserRouter>
                <NaBar/>
                <Routes>
                    <Route path={"/"} element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                    {/*<Route path="/*" element={<ErrorPage404 />}/>*/}
                    <Route path="/user/:name/:last" element={<User/>}/>
                    <Route path="/*" element={<Navigate to={"/"}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
