import * as React from "react";
// import { BrowserRouter, Route, } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from '../HomePage/index';
import Login from "../Login/index.js";


function App() {
  return (
   <div className="App">
      <h1>Resource.log()</h1>

      
   <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route exact path="/">
  {loggedIn ? <Navigate to="/homepage" /> : <HomePage />}
</Route> */}
        <Route path="homepage" element={<HomePage />} />
     
      </Routes>
   

    </div>
  );
}

export default App;
