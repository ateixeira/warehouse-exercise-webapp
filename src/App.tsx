import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Panel, Layout } from "./screens";
import { Menu } from "./components";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Switch>
          <Route path="/articles">
            <Layout>
              <Panel title="Articles" />
            </Layout>
          </Route>
          <Route path="/products">
            <Layout>
              <Panel title="Products" />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
