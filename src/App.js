import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";

function App() {
    return (
        <div className="App">
            <h1>Learning react</h1>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
