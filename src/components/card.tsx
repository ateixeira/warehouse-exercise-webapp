import * as React from "react";
import { Article, PanelTypes, Product } from "../types";
import "./card.scss";

export interface IProps {
  item: Article | Product;
  type: PanelTypes;
  children?: React.ReactNode;
}

const renderItem = (item: Article | Product, type: PanelTypes) => {
  console.log("ITEM");
  console.log(item);
  switch (type) {
    case PanelTypes.Article:
      return renderArticle(item as Article);
    case PanelTypes.Product:
      return renderProduct(item as Product);
  }
};

const renderArticle = (article: Article) => {
  return (
    <div className="article">
      <div className="column selector">
        <input type="checkbox" />
      </div>
      <div className="column id">{article.art_id}</div>
      <div className="column name">{article.name}</div>
      <div className="column stock">{article.stock}</div>
    </div>
  );
};
const renderProduct = (product: Product) => {
  const calculatePrice = () => {
    // product.contain_articles.reduce((acc, article));
    return 10.99;
  };
  return (
    <div className="product">
      <div className="productData">
        <div className="column selector">
          <input type="checkbox" />
        </div>
        <div className="column name">{product.name}</div>
      </div>
      <div className="price">{calculatePrice()}</div>
    </div>
  );
};

const Card = (props: IProps) => {
  return <div className="card">{renderItem(props.item, props.type)}</div>;
};

export default Card;
