import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import BaseStyles from "./base-styles";
import PrivateRoute from "./private-route";
import Content from "../components/content";
import Header from "../components/header";
import Login from "../views/login";
import Home from "../views/home";
import Detail from "../views/detail";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BaseStyles />
      <Router>
        <>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/albums/:artist" component={Detail} />
            </Switch>
          </Content>
        </>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
