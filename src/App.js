import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ItemList from "./containers/ItemList/ItemList";
import Header from "./common/containers/Header/Header";
import * as classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <Header />
        <Switch>
          <Route path="/items" component={ItemList} />
          <Redirect to="/items" />
        </Switch>
      </div>
    );
  }
}

export default App;
