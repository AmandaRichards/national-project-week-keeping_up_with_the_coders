import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/index';

function App() {
  return (
   <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/HomePage">
            <HomePage />
          </Route>
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
