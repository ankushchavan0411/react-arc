import React, { Component } from "react";
import { login, logout } from "../../../actions/userAction";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      toDashboard: false,
      errors: {}
    };
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({
      fields
    });
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Cannot be empty";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if (
      typeof fields["password"] !== "undefined" &&
      fields["password"].length < 8
    ) {
      formIsValid = false;
      errors["password"] = "Password minimum 8 character";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  onLoginSubmit = e => {
    e.preventDefault();
    // if (this.handleValidation()) {
    //   this.props
    //     .login({
    //       username: this.state.fields["username"],
    //       password: this.state.fields["password"]
    //     })
    //     .then(async () => {
    //       this.setState({
    //         toDashboard: true
    //       });
    //     });
     
    // }
    this.setState({
      toDashboard: true
    });
  };
  render() {
    console.log("login page loaded");
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <b>Powerpay21</b>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form
              onSubmit={this.onLoginSubmit.bind(this)}
              name="loginForm"
              noValidate
            >
              <div className="form-group has-feedback">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  ref="username"
                  onChange={this.handleChange.bind(this, "username")}
                  value={this.state.fields["username"]}
                />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                <div
                  style={{ marginTop: "2px" }}
                  className={
                    this.state.errors["username"] ? "alert alert-danger" : ""
                  }
                  role="alert"
                >
                  {this.state.errors["username"]}
                </div>{" "}
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref="password"
                  onChange={this.handleChange.bind(this, "password")}
                  value={this.state.fields["password"]}
                />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
                <div
                  style={{ marginTop: "2px" }}
                  className={
                    this.state.errors["password"] ? "alert alert-danger" : ""
                  }
                  role="alert"
                >
                  {this.state.errors["password"]}
                </div>
              </div>
              <div className="form-group">
                <label className=" form-checkbox">
                  <input className="form-control-input" type="checkbox" />
                  <span className="form-control-label">Remember Me</span>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>
              {/* <div className="row">
                <div className="col-xs-6">
                  <Link to="/signup" className="footer-link">
                    Create An Account
                  </Link>
                </div>
                <div className="col-xs-6">
                  <Link to="#" className="footer-link">
                    Forgot Password
                  </Link>
                </div>
              </div> */}
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.loginData
});

const mapDispatchToProps = {
  login,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
