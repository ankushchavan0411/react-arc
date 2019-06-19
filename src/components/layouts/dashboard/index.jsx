import React, { Component } from "react";
// import { Header, SideBar } from ".";
import Header from "./Header";
import SideBar from "./SideBar";

export default class Master extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar />
      </div>
    );
  }
}
