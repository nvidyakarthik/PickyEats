import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import ResOwner from "./pages/ResOwner";
import Login from "./pages/Login";
import Resaurant from "./pages/Resaurant";
import MenuEdit from "./pages/MenuEdit";
import ResSearch from "./pages/ResSearch";
import NoMatch from "./pages/NoMatch";
import MenuItem from "./pages/MenuItem";

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
        <Route exact path="/resowner/:id" component={MenuEdit} />
        <Route exact path="/ressearch" component={ResSearch} />
        <Route exact path="/menuitem" component={MenuItem} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App;