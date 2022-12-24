import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NaBar from "./component/NaBar";
import User from "./component/User";
import Companies from "./component/Companies";
import Youtube from "./component/Youtube";
import Meta from "./component/Meta";
import Google from "./component/Google";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NaBar/>
                <Routes>
                    <Route path={"/"} element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                    {/*<Route path="/*" element={<ErrorPage404 />}/>*/}
                    <Route path="/user/:name/:last" element={<User/>}/>
                    <Route path="/*" element={<Navigate to={"/"}/>}/>
                    <Route path="/companies/" element={<Companies/>}>
                        <Route path="youtube" element={<Youtube/>}/>
                        <Route path="meta" element={<Meta/>}/>
                        <Route path="google" element={<Google/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
