import * as React from "react";
import { Card, Filters } from "../components";
import { Article, PanelTypes, Product } from "../types";
import "./panel.scss";

export interface IProps {
  title: string;
  type: PanelTypes;
  items: (Product | Article)[];
}

const Panel = (props: IProps) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <Filters title={props.title} />
      <div className="content">
        <div className="header"></div>
        {props.items &&
          props.items.map((item: Article | Product) => {
            return <Card item={item} type={props.type} />;
          })}
      </div>
    </>
  );
};

export default Panel;
