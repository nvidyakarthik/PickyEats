import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import ResOwner from "./pages/ResOwner";
import Login from "./pages/Login";
import Resaurant from "./pages/Resaurant";
import NoMatch from "./pages/NoMatch";

import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/restaurant/:id" component={Resaurant} />
        <Route exact path="/resowner" component={ResOwner} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App;