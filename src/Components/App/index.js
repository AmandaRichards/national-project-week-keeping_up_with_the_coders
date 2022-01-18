import * as React from "react";
import { BrowserRouter, Route, } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/index';
import NameInput from '../Login/NameInput';
import PasswordInput from "../Login/PasswordInput";
import SubmitButton from "../Login/SubmitButton";
import Input from "../Login/index.js";

function App() {
  return (
   <div className="App">
      <h1>Resource.log()</h1>

      
      {/* <BrowserRouter> */}
        <Input />
  
          {/* <Route path="/HomePage"> */}
            <HomePage />
          
         
      
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
