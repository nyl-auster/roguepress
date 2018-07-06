import React from "react";
import withApollo from "rogue/hocs/apollo";
import createClient from "./lib/apolloClient";
import { compose } from "recompose";
import PostListPage from "./themes/default/components/pages/PostListPage";
import { Switch, Route } from "react-router-dom";

const App = props => (
  <div>
    <Switch>
      <Route exact path="/" component={PostListPage} />
    </Switch>
  </div>
);

export default compose(withApollo(createClient))(App);
