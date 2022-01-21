import * as React from "react";
// import { BrowserRouter, Route, } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import {useState} from "react"
import "../Login/index.css";
// import HomePage from "../HomePage/index.js";
import { Link} from "react-router-dom"
import Login from "../Login/index.js";
import Content from "../contentPage/index.js"
import HomePage from "../HomePage";
import Contentuser from "../contentpageuser";

// import Week1 from "./ContentPages/Week1";


function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // console.log(takeme)

  //  function Takeme(e){
  //   e.preventDefault()
    
  //   console.log(password)
  //   // return <Redirect to='/homepage' />
  // }
  

  return (<>
    {/* <div className="App">
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

      <form className="login-form" onSubmit={Takeme}>
        <input className="inputLogin" type="text" placeholder="Enter UserName" required onChange={(e)=> setUserName(e.target.value)} value={username}></input>
        <input className="inputLogin" type="text" placeholder="Enter Password" required onChange={(e)=> setPassword(e.target.value)} value={password}></input>
        <input id="submitlogin" type="submit" value="Enter"></input>
      </form>
    </div>
    </div>
    </div>
    </div> */}
      <Routes>
        <Route path="*" element={<Login setUserName={setUserName} setPassword={setPassword} username={username} password={password}/>} />
        <Route path="/homepage" element={<HomePage username={username} password={password}/> } />
        <Route path="/contentpage" element={ <Content/>} />
        <Route path="/contentpageuser" element={ <Contentuser/>} />
        {/* <Route exact path="/">
  {loggedIn ? <Navigate to="/homepage" /> : <HomePage />}
</Route> */}
        {/* <Route path="homepage" element={<HomePage />} /> */}
        {/* <Route path="week1" element={<Week1 />} /> */}
      </Routes>
      {/* </div>
   </> */}
  </>
    
  );
}

export default App;
