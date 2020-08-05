import React from 'react';
import './App.css';
import {BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Employees from "./pages/Employess/Employees";
import Main from "./pages/Main/Main";

const App = () => {
  return (
      <>
        <BrowserRouter>
            <Header />
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route exact path='/employees'>
                    <Employees />
                </Route>
        </BrowserRouter>
      </>
  )
}

export default App;
