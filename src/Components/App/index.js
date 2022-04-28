import * as React from "react";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../Login/index.css";

import Login from "../Login/index.js";
import Content from "../contentPage/index.js";
import HomePage from "../HomePage";
import Contentuser from "../contentpageuser";



function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>
  
      <Routes>
        <Route
          path="*"
          element={
            <Login
              setUserName={setUserName}
              setPassword={setPassword}
              username={username}
              password={password}
            />
          }
        />
        <Route
          path="/homepage"
          element={<HomePage username={username} password={password} />}
        />
        <Route path="/contentpage" element={<Content />} />
        <Route path="/contentpageuser" element={<Contentuser />} />
        
      </Routes>
      {/* </div>
   </> */}
    </>
  );
}

export default App;
