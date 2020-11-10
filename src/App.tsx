import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Panel, Layout } from "./screens";
import { Menu } from "./components";
import { Article, PanelTypes, Product } from "./types";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES, GET_PRODUCTS } from "./utils/queries";
import "./app.scss";

interface ArticleData {
  getAllArticles: ArticleList;
}
interface ProductData {
  getAllProducts: ProductList;
}
interface ArticleList {
  articles: Article[];
}
interface ProductList {
  products: Product[];
}

function App() {
  const articles = useQuery<ArticleData, {}>(GET_ARTICLES, {});
  const products = useQuery<ProductData, {}>(GET_PRODUCTS, {});

  console.log("articles");
  console.log(articles);
  console.log("products");
  console.log(products);

  return (
    <Router>
      <div className="app">
        <Menu />
        {articles.data && products.data && (
          <Layout>
            <Switch>
              <Route path="/articles">
                <Panel
                  title="Articles"
                  type={PanelTypes.Article}
                  loading={articles.loading}
                  items={articles.data?.getAllArticles?.articles || []}
                />
              </Route>
              <Route path="/products">
                <Panel
                  title="Products"
                  type={PanelTypes.Product}
                  loading={products.loading}
                  items={products.data?.getAllProducts?.products || []}
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
