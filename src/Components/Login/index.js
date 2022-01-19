import { useState } from "react";
//import HomePage from "../HomePage"
//import styled from "styled-components";
import styled from "styled-components";
 //import {Navigate, Router, Routes} from "react-router-dom"



function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
    const newLocal = useState(false);
  //Needs to be in the login page
  const [loggedIn, setLoggedIn] = newLocal

 
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
    

  
    <StyledBody>
    
    <LoginForm>
    <StyledForm value={loggedIn}>
    <StyledTitle>Login</StyledTitle>
    <StyledInput onChange={handleNameChange} value={name} placeholder="Tell us your name.."/>
      <StyledInput onChange={handleChange} value={password} placeholder="Enter the password.." />
      <StyledButton onClick={handleSubmit}>Login</StyledButton>
      
    </StyledForm>
    </LoginForm>
    
   {/* {loggedIn ? <Navigate to="/homepage" /> : <Login />}  */}

    {/* {loggedIn ? <Navigate to="/homepage"/> : <Navigate to="/"/>} */}
    
</StyledBody>
  
  );
}

export default Login;

const StyledButton = styled.button`
background-color: #19647E;
color: #FFFCFF ;
text-align: center;
text-justify: center;
border-radius: 10%;

left: 50%;
margin-top:25%;
margin-bottom:25%;
padding: 12px 50px 12px 50px;
width: 200px;
height: 10px;
`

const StyledInput = styled.input`
border-color: #9DD9D2;
border-radius: 10%;
float: right;
margin-top: 10%;
padding: 12px 20px;
width: 200px;
height: 10px;
 `

const LoginForm = styled.section`
position: center;
margin: 100px;
padding: 10px 200px 20px 200px; 
width: 300px;
height: 400px;
border: 1px solid black;
box-shadow: 5px 10px;
` 
const StyledForm = styled.form`

`

const StyledTitle = styled.h1`
padding-bottom: -10px`

const StyledBody = styled.body`
margin: 0;
height: 100vh;
background: linear-gradient(
    to right, 
    #9DD9D2 0%,
    #9DD9D2 25%,
    white 25%,
    white 100%
  
);

`