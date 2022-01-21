// import { useState } from "react";
//import { Router, Route, Navigate, Redirect, Switch} from "react-router-dom";
//import HomePage from "../HomePage"
import { Link} from "react-router-dom"
// import { useHistory } from "react-router-dom";
import "./index.css"
// import {useState} from "react"
// import App from "../App";

export let hello;
function Login({setUserName,setPassword,username,password}) {
  // const history = useHistory();
  // const [username, setUserName] = useState("hello");
  // const [password, setPassword] = useState("wh");
  // hello=password;
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
 

//   const renderLinkIf = (content, condition, href) => {
//   if (condition) {
//     return (<Link to={href}>{content}</Link>);
//   }
//   return (content);
// };
//   function Takeme(e){
//     e.preventDefault()
//     let lord=password
//     return lord;
//     // console.log(password)
//     // return <Redirect to='/homepage' />
// }
  
  // console.log(username)
  return (
     <>
    <div className="biggercontainer">
    <div className="poweredby">
    <h1>Powered By</h1>
     <div className="logo">
            <img src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="Logo" />
       </div>
    </div>
   
    <div className="loginmaincontainer">
    <div className="logincontainer">
    <div className="leftside">
    <img src="https://cdn-icons-png.flaticon.com/512/2933/2933190.png" alt="computer" className="computer"></img>
     <h2>Resource.log()</h2>
     </div>
     <div className="rightside">
       <Link to="/homepage" className="linktext">Log In</Link>

       <form className="login-form" >
         <input className="inputLogin" type="text" placeholder="Enter UserName" required onChange={(e)=> setUserName(e.target.value)} value={username}></input>
         <input className="inputLogin" type="text" placeholder="Enter Password" required onChange={(e)=> setPassword(e.target.value)} value={password}></input>
         <button id="submitlogin" type="submit" value="Enter">
           <Link to="/homepage"  id="submitLoginText">Log In</Link>
         </button>
       </form>
     </div>
     </div>
     </div>
     </div>
     {/* <App  takeme={Takeme}/> */}
    </>
  )
}
export default Login;