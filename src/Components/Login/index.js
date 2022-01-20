// import { useState } from "react";
//import { Router, Route, Navigate, Redirect, Switch} from "react-router-dom";
//import HomePage from "../HomePage"
import { Link } from "react-router-dom"
import "./index.css"
function Login() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("")
  //Needs to be in the login page
  // const [loggedIn, setLoggedIn] = useState(false)
//   function handleNameChange(event){
//       setName(event.target.value);
//   }
//  function handleChange(event) {
//     setPassword(event.target.value);
//   }
//   function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    // event.preventDefault();
    //onSubmitClick(password);
    // if(password === "Koder"){
    //     console.log("correct password");
    //     setLoggedIn(true);
    // }else{
    //     console.log("wrong password")
    //     console.log("fail")
    // }
  // }
  return (
    <div className="biggercontainer">
    <div className="poweredby">
    <h1>Powered By SOC</h1>
    </div>
    <div className="logincontainer">
    <div className="leftside">
    <img src="https://cdn-icons-png.flaticon.com/512/2933/2933190.png" alt="computer" className="computer"></img>
    <h2>Resource.log()</h2>
    </div>
    <div className="rightside">
    <Link to="/homepage" className="linktext">Click Here To Enter</Link>
    </div>
    </div>
    </div>
  );
}
export default Login;