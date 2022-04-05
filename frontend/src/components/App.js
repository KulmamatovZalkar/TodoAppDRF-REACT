import React, { Component, Fragment } from "react";
import Header from "./layouts/Header";
import DashBoard from "./todo/DashBoard";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <DashBoard />
      </Fragment>
    );
  }
}
