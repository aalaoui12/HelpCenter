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
          <div class="bg-blue-500 h-screen">
            <div class="flex flex-wrap justify-center content-center h-screen">
              <Search />
            </div>
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