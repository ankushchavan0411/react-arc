import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel" style={{"paddingBottom": "25%"}}>
            <div className="info" style={{"left": "0%"}}>
              <p>{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</p>
              <Link to="#">
                <i className="fa fa-circle text-success" /> Online
              </Link>
            </div>
          </div>

          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li>
              <Link to="/dashboard">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span> 
              </Link>
            </li>
            {/* <li>
              <Link to="/category">
              <i className="fa fa-list"></i>
                <span>Category</span> 
              </Link>
            </li> */}
     
          </ul>
        </section>
      </aside>
    );
  }
}
