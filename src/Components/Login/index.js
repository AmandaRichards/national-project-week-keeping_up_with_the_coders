import { useState } from "react";
//import { Router, Route, Navigate, Redirect, Switch} from "react-router-dom";
//import HomePage from "../HomePage"




function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  //Needs to be in the login page
  const [loggedIn, setLoggedIn] = useState(false)

 
  function handleNameChange(event){
      setName(event.target.value);
  }

 function handleChange(event) {
    setPassword(event.target.value);
  }


  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
   

    
    event.preventDefault();
    //onSubmitClick(password);
    if(password === "Koder"){
        console.log("correct password");
        setLoggedIn(true);

    }else{
        console.log("wrong password")
    }
  }

  return (
    

    <div>
    <h1>Resource.log()</h1>
    <form value={loggedIn}>
    <input onChange={handleNameChange} value={name} placeholder="enter your name"/>
      <input onChange={handleChange} value={password} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    
  

    {/* {loggedIn ? <Navigate to="/homepage"/> : <Navigate to="/"/>} */}
    

    </div>
  );
}

export default Login;