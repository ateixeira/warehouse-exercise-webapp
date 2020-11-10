import * as React from "react";
import { Card, Data, Filters } from "../components";
import { Article, PanelTypes, Product, WarehouseData } from "../types";
import "./panel.scss";

export interface IProps {
  title: string;
  type: PanelTypes;
  loading: boolean;
  items: WarehouseData;
}

const renderArticle = (props: IProps) => {
  return props.items.articles.map((item: Article, idx) => {
    return <Card key={`${item.name}-${idx}`} item={item} type={props.type} />;
  });
};
const renderProduct = (props: IProps) => {
  return props.items.products.map((item: Product, idx) => {
    return (
      <Card
        key={`${item.name}-${idx}`}
        articles={props.items.articles}
        item={item}
        type={props.type}
      />
    );
  });
};
const Panel = (props: IProps) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <Data items={props.items} type={props.type} />
      <Filters title={props.title} />
      <div className="content">
        <div className="header"></div>
        {props.type === PanelTypes.Article
          ? renderArticle(props)
          : renderProduct(props)}
      </div>
    </>
  );
};

export default Panel;
