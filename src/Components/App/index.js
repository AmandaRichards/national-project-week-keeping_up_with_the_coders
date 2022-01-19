import * as React from "react";
// import { BrowserRouter, Route, } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import HomePage from '../HomePage/index';
import Login from "../Login/index.js";
import styled from "styled-components";
import TopicPage from "../TopicPage";

function App() {
  //const [loggedIn, setLoggedIn] = useState(false)
  return (
    
   <div className="App">
      

  
          

   <Routes>
        <Route path="/" element={<Login />} />
        

     
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/week1" element={<TopicPage />} />
     
      </Routes>
   
      
   

</div>
   
  );
}

export default App;


