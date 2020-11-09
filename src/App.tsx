import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Panel, Layout } from "./screens";
import { Menu } from "./components";
import { Article, Product } from "./types";
import "./app.scss";

const articles: Article[] = [
  { art_id: 1, name: "Article 1", stock: 10 },
  { art_id: 2, name: "Article 2", stock: 20 },
  { art_id: 3, name: "Article 3", stock: 30 },
  { art_id: 4, name: "Article 4", stock: 40 },
  { art_id: 5, name: "Article 5", stock: 50 },
  { art_id: 6, name: "Article 6", stock: 60 },
  { art_id: 7, name: "Article 7", stock: 70 },
];
const products: Product[] = [
  { id: "product1", name: "Product", price: 11.11, articles: [] },
  { id: "product2", name: "Product", price: 22.22, articles: [] },
  { id: "product3", name: "Product", price: 33.33, articles: [] },
  { id: "product4", name: "Product", price: 44.44, articles: [] },
  { id: "product5", name: "Product", price: 55.55, articles: [] },
  { id: "product6", name: "Product", price: 66.66, articles: [] },
  { id: "product7", name: "Product", price: 77.77, articles: [] },
  { id: "product8", name: "Product", price: 88.88, articles: [] },
];
function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Layout>
          <Switch>
            <Route path="/articles">
              <Panel title="Articles" items={articles} />
            </Route>
            <Route path="/products">
              <Panel title="Products" items={products} />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
