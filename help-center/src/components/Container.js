import React from "react";
import { Route, Switch } from "react-router-dom";

import Search from "./Search";
import Article from "../pages/Article";
import Error from "../pages/Error";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <div>
            <h1>Hello from Create React App</h1>
            <p>Here should be a search component.</p>
            <Search />
          </div>
        </Route>
        <Route path='/article/:slug'>
          <Article />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    )
  }
}
export default Container;