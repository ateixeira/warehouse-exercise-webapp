import * as React from "react";
import { Article, PanelTypes, Product, ProductArticle } from "../types";
import "./card.scss";

export interface IProps {
  item: Article | Product;
  type: PanelTypes;
  articles?: Article[];
  children?: React.ReactNode;
}

const renderItem = (
  item: Article | Product,
  type: PanelTypes,
  articles?: Article[]
) => {
  switch (type) {
    case PanelTypes.Article:
      return renderArticle(item as Article);
    case PanelTypes.Product:
      return renderProduct(item as Product, articles || []);
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
const renderProduct = (product: Product, articles: Article[]) => {
  const getArticleName = (art_id: number) => {
    const article = articles.find(
      (article: Article) => article.art_id === art_id
    );
    return article?.name || "";
  };
  const getArticlesList = () => {
    return product.contain_articles.reduce(
      (acc: string[], article: ProductArticle) => {
        acc.push(getArticleName(article.art_id));
        return acc;
      },
      []
    );
  };
  return (
    <div className="product">
      <div className="productData">
        <div className="column selector">
          <input type="checkbox" />
        </div>
        <div className="column name">{product.name}</div>
      </div>
      <div className="separator" />

      <div className="articles">
        {getArticlesList().map((art: string) => {
          return (
            <>
              <div className="article">{art}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const Card = (props: IProps) => {
  return (
    <div className="card">
      {renderItem(props.item, props.type, props.articles)}
    </div>
  );
};

export default Card;
