import * as React from "react";
// import { BrowserRouter, Route, } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from '../HomePage/index';
import Login from "../Login/index.js";
import Content from "../contentPage/index.js"


function App() {
  return (
   <div className="App">
      

      
   <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route exact path="/">
  {loggedIn ? <Navigate to="/homepage" /> : <HomePage />}
</Route> */}
        <Route path="homepage" element={<HomePage />} />
     
      </Routes>
    <Content/>

    </div>
  );
}

export default App;
