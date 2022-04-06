import React, { Component, Fragment } from "react";
import Header from "./layouts/Header";
import DashBoard from "./todo/DashBoard";

import { Provider } from "react-redux";
import store from "../store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header />
          <DashBoard />
        </div>
      </Provider>
    );
  }
}
