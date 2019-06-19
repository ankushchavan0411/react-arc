import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import * as routes from "./lib/constants/routes";
import { withRouter } from "react-router";
import {Login} from "./components/screen/auth";
import Dashboard from "./components/screen/dashboard";

class App extends Component {

  componentWillMount = async() => {
  }
  
  webRender = () => {
    return (
      <Switch>
        <Route exact path={routes.DASHBOARD} component={Dashboard} />
        {/* <Route exact path={routes.SIGNUP} component={SignUp} /> */}
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={"/"} component={Login} />

      </Switch>
    );
  };

  render() {
    return (
      <div>
          <Route render={this.webRender} />
      </div>
    );
  }
}

export default (withRouter(App));
