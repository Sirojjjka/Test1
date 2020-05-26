import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom"
import Page1Container from "./components/Page1/Page1Container";
import Page2 from "./components/Page2/Page2";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <Redirect from="/" to="Page1Container" />
        <Route path="/Page1Container" component={Page1Container}/>
        <Route path="/Page2" component={Page2}/>
    </div>
      </BrowserRouter>
  );
}

export default App;
