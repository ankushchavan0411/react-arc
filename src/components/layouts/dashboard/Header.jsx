import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      flag: false
    };
  }

  signOut = () => {
    localStorage.removeItem("auth_token");
    this.setState({
      flag: true
    });
  };

  render() {
    if (this.state.flag === true) {
      return <Redirect to="/" />;
    }
    return (
      <header className="main-header">
        <Link to="#" className="logo">
          {/* <i >
          <img
              src="/img/logo.png"
              style={{height: "23px", "marginRight": "5%"}}   
              alt="Logo"
            />
          </i>
          <span>
            <b>Powerpay21</b>
          </span> */}
          <span className="logo-mini">
            {" "}
            <img
              src="/img/favicon.png"
              style={{ height: "23px", marginRight: "5%" }}
              alt="Logo"
            />
          </span>
          <span className="logo-lg">
            <img
              src="/img/logo.png"
              style={{ height: "23px", marginRight: "5%" }}
              alt="Logo"
            />
          </span>
        </Link>
        <nav className="navbar navbar-static-top">
          <Link
            to="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </Link>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="true"
                  onClick={this.signOut}
                >
                  <span className="hidden-xs" onClick={this.signOut}>
                    <i className="fa fa-sign-out" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
