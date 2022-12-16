import logo from './logo.svg';
import './App.css';
import Users from "./Users";
import State from "./State";
import Statewithclass from "./Statewithclass";
import Participants from "./Participants";
import Properties from "./Properties";
import {useState} from "react"; // useState is a hook
import Propsclass from "./Propsclass";
import Textinput from "./Textinput";
import Toggle from "./Toggle";
import Form from "./Form";
import ConditionalRendering from "./ConditionalRendering";
import FormValidation from "./FormValidation";
import Rendercheck from "./Rendercheck";
import ExcomponentDidMount from "./ExcomponentDidMount";
import Hooks from "./Hooks"
import UseEffectWithProps from "./UseEffectWithProps";
import Bootsraping from "./Bootsraping";
import ArrayListTableMapFunction from "./ArrayListTableMapFunction";
import MainComponent from "./MainComponent";
import Fragments from "./Fragments";
import LiftingUpTheState from "./LiftingUpTheState";
import NonRerendringComponent from "./NonRerendringComponent";



function App() {
    let data = "Tahir Mehfooz PM";

    function banana() {
        data = 'Let the change begin';
        alert('party')
    }

    const [name, setNname] = useState("Rizwan");

    function changeData() {
        setNname('Tahir')
    }

    const [email, setEmail] = useState('rizwan.akhwandzada@gmail.com')
    const [show, setVisibility] = useState(true)
    const [count,setCount] = useState(5);
    const [dataa,setdataa] = useState(10);

    return (
        <div className="App"><h1>Learning react</h1>
            <Users></Users>
            <Participants></Participants>
            <State/>
            <Statewithclass/>
            <button onClick={() => banana()}>Click Me</button>
            <Properties name={name} phone={"03122077722"} others={{address: "Abbottabad"}}/>
            <button onClick={() => changeData()}>Update Name</button>
            <Propsclass name={name}/>
            <Textinput></Textinput>
            <Toggle></Toggle>
            <Form></Form>
            <ConditionalRendering/>
            <FormValidation/>
            <Rendercheck email={email}/>
            <button onClick={() => setEmail('rizwan.swati@hotmail.com')}>Update Email</button>
            {
                show ? <ExcomponentDidMount />: <div>Nothing</div>
            }

            <button onClick={() => setVisibility(!show)}>Toggle</button>
            <Hooks />
            <UseEffectWithProps count = {count} dataa={dataa} />

            <button onClick={()=>setCount(count+1)} >Update Count</button>
            <button onClick={()=>setdataa(dataa+1)} >Update Dataa</button>
            <Bootsraping />
            <ArrayListTableMapFunction />
            <MainComponent />
            <Fragments />
            <LiftingUpTheState/>
            <NonRerendringComponent />
        </div>
    );
}

export default App;
