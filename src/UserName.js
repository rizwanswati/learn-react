import React, {useState} from "react";

const UserName = () => {
  const [username,setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);

  function handleInput(e) {
      let user = e.target.value;
      if(user.length < 3){
          setUsernameErr(true)
      }else{
          setUsernameErr(false)
      }
      setUsername(user);
  }

  return (
      <div>
          <input type={"text"} onChange={handleInput} id={"user-name"}/> {usernameErr? <span>User Name is Incorrect</span>:""}
      </div>
  );
}
export default UserName;