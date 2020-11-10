import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Panel, Layout } from "./screens";
import { Menu } from "./components";
import {
  Article,
  ArticleData,
  PanelTypes,
  Product,
  ProductData,
  WarehouseData,
} from "./types";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES, GET_PRODUCTS } from "./utils/queries";
import "./app.scss";

function App() {
  const articles = useQuery<ArticleData, {}>(GET_ARTICLES, {});
  const products = useQuery<ProductData, {}>(GET_PRODUCTS, {});

  const [articleData, setArticleData] = React.useState<Article[]>([]);
  const [productData, setProductData] = React.useState<Product[]>([]);
  const [data, setData] = React.useState<WarehouseData>({
    articles: [],
    products: [],
  });

  React.useEffect(() => {
    if (!articles.loading && articles.data?.getAllArticles.articles) {
      setArticleData(articles.data?.getAllArticles.articles);
    } else {
      setArticleData([]);
    }
    if (!products.loading && products.data?.getAllProducts.products) {
      setProductData(products.data?.getAllProducts.products);
    } else {
      setProductData([]);
    }
  }, [articles, products]);

  React.useEffect(() => {
    setData({
      articles: articleData,
      products: productData,
    });
  }, [articleData, productData]);

  return (
    <Router>
      <div className="app">
        <Menu />
        {
          <Layout>
            <Switch>
              <Route path="/articles">
                <Panel
                  title="Articles"
                  type={PanelTypes.Article}
                  loading={articles.loading}
                  items={data}
                />
              </Route>
              <Route path="/products">
                <Panel
                  title="Products"
                  type={PanelTypes.Product}
                  loading={products.loading}
                  items={data}
                />
              </Route>
            </Switch>
          </Layout>
        }
      </div>
    </Router>
  );
}

export default App;
