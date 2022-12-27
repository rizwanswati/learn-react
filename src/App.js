import logo from './logo.svg';
import './App.css';
import React from "react";
import {ConsumerContext} from "./component/ConsumerContext";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ColorUpdateButton from "./component/ColorUpdateButton";

class App extends React.Component {

    constructor() {
        super()

        this.updateColor = (col) => {
            this.setState({
                color: col
            })
        }

        this.state = {
            color: "green",
            updateColor: this.updateColor
        }
    }

    render() {
        return (
            <ConsumerContext.Provider value={this.state}>
                <Header/>
                <Footer/>
                <ColorUpdateButton/>
            </ConsumerContext.Provider>
        );
    }
}

export default App;
