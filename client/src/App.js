import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import ResOwner from "./pages/ResOwner";
import LoginForm from "./pages/Login";
import Resaurant from "./pages/Resaurant";
import MenuEdit from "./pages/MenuEdit";
import ResSearch from "./pages/ResSearch";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import API from "./utils/API"
import MenuItem from "./pages/MenuItem";

import Nav from "./components/Nav";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }
  componentDidMount() {
    API.getUserInfo().then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    API.signOut().then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _login(email, password) {
    API.signInUser({
      email: email,
      password: password
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          // update the state
          console.log("response.data"+response.data);
          this.setState({
            loggedIn: true,
            user: response.data.user
          });
        }
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={() =>
              <LoginForm
                _login={this._login}

              />
            }
            />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/restaurant/:id" component={Resaurant} />
            <Route exact path="/resowner" component={ResOwner} />
            <Route exact path="/resowner/:id" component={MenuEdit} />
      
            <Route exact path="/ressearch/:id" component={ResSearch} />
            <Route exact path="/menuitem" component={MenuItem} />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;