import React from "react";
import Password from "./Password"
import UserName from "./UserName";


const FormValidation = () => {
    function FormSubmit(e) {
        let uname = document.getElementById('user-name').value;
        let pass = document.getElementById('pass-phrase').value
        if (uname.length <3 || pass.length<3){
            alert('You have an error in your form fields.')
        }else{
            alert('data OK');
        }
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={FormSubmit}>
                <h1>Login</h1> <br/> <br/>
                <UserName/> <br/> <br/>
                <Password/>
                <input type={"submit"} />
            </form>
        </div>
    );
}

export default FormValidation