import * as React from "react";
// import { BrowserRouter, Route, } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import HomePage from "../HomePage/index.js";
import Login from "../Login/index.js";
import Content from "../contentPage/index.js"
import HomePage from "../HomePage";

// import Week1 from "./ContentPages/Week1";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage /> } />
        <Route path="/contentpage" element={ <Content/>} />
        {/* <Route exact path="/">
  {loggedIn ? <Navigate to="/homepage" /> : <HomePage />}
</Route> */}
        {/* <Route path="homepage" element={<HomePage />} /> */}
        {/* <Route path="week1" element={<Week1 />} /> */}
      </Routes>
   

    </div>
  );
}

export default App;
