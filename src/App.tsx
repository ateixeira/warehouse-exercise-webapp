import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Panel, Layout } from "./screens";
import { Menu } from "./components";
import { Article, PanelTypes, Product } from "./types";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "./utils/queries";
import "./app.scss";

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
interface ArticleData {
  getAllArticles: ArticleList;
}
interface ArticleList {
  articles: Article[];
}

function App() {
  const { loading, data } = useQuery<ArticleData, {}>(GET_ARTICLES, {});

  return (
    <Router>
      <div className="app">
        <Menu />
        {data && (
          <Layout>
            <Switch>
              <Route path="/articles">
                <Panel
                  title="Articles"
                  type={PanelTypes.Article}
                  loading={loading}
                  items={data?.getAllArticles.articles}
                />
              </Route>
              <Route path="/products">
                <Panel
                  title="Products"
                  type={PanelTypes.Product}
                  loading={loading}
                  items={products}
                />
              </Route>
            </Switch>
          </Layout>
        )}
      </div>
    </Router>
  );
}

export default App;
