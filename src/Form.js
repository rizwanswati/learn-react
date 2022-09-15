import React,{useState} from "react";

function ShowForm() {

    const [name, setName] = useState("");
    const [option, setOption] = useState(0);
    const [consent, setConsent] = useState(false);

    function PreventSubmit(event) {
        event.preventDefault();
        console.warn(name, option, consent);
    } 

    return (
        <div>
            <h1>Handle Form in React</h1>
            <form onSubmit={PreventSubmit}>
                <input type={"text"} onChange={(e) => setName(e.target.value)}/>
                <select onChange={(e) => setOption(e.target.value)}>
                    <option>Select Option</option>
                    <option>Pizza</option>
                    <option>Burger</option>
                    <option>Pepsi</option>
                    <option>Fries</option>
                </select>
                <input type={"checkbox"} onChange={(e) => setConsent(e.target.checked)}/>

                <input type={"submit"}/>
            </form>
        </div>
    );
}

export default ShowForm;