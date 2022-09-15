import React, {useState} from "react";

const Password = () => {
    const [pass,setPassword] = useState("");
    const [passErr, setPasswordErr] = useState(false);

    function handleInput(e) {
        let pass = e.target.value;
        if(pass.length < 3){
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
        setPassword(pass);
    }

    return (
        <div>
            <input type={"password"} onChange={handleInput} id={"pass-phrase"}/> {passErr? <span>User Name is Incorrect</span>:""}
        </div>
    );
}

export default Password;