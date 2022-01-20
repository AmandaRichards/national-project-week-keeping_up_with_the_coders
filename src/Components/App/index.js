import * as React from "react";
// import { BrowserRouter, Route, } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/index";
import Login from "../Login/index.js";

import Week1 from "./ContentPages/Week1";

import Content from "../contentPage/index.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route exact path="/">
  {loggedIn ? <Navigate to="/homepage" /> : <HomePage />}
</Route> */}
        <Route path="homepage" element={<HomePage />} />
        <Route path="week1" element={<Week1 />} />
        <Route path="contentpage" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
