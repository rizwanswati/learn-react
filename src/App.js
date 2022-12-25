import logo from './logo.svg';
import './App.css';
import GetAPI from "./component/GetAPI";
import PostAPI from "./component/PostAPI";


function App() {

    return (
        <div className="App">
            <h1>React APIs</h1>
            <GetAPI/>
            <PostAPI/>
        </div>
    );
}

export default App;
