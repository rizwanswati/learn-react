import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NaBar from "./component/NaBar";

function App() {
    return (
        <div className="App">
            <h1>Learning react</h1>
            <BrowserRouter>
                <NaBar/>
                <Routes>
                    <Route path={"/"} element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
