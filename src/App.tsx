import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Articles, Home, Products } from "./screens";
import { Menu } from "./components";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
