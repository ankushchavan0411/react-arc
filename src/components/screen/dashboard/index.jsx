import React, { Component } from "react";
import Master from "../../layouts/dashboard";
import { dashboard } from "../../../actions/dashboardAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Chart } from "react-charts";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      framework: 0,
      category: null
    };
    this.state.products = [];
  }

  componentWillMount = async () => {};

  render() {
    return (
      <div>
        <Master />

        <div className="content-wrapper">
          <section className="content">
            <div className="row">
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-aqua">
                  <div className="inner">
                    <h3>{123}</h3>
                    <p>Total Sales</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-list" />
                  </div>
                  <Link to="/category" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>{332}</h3>

                    <p>Total Refund</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-line-chart" />
                  </div>
                  <Link to="/indicators" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-yellow">
                  <div className="inner">
                    <h3>{332}</h3>

                    <p>Total Transaction</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-area-chart" />
                  </div>
                  <Link to="/formations" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 ">
          
              </div>
              <div className="col-md-6 ">

              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dashboardData: state.dashboardData
});

const mapDispatchToProps = {
  dashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
