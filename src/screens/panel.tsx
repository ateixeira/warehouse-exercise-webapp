import * as React from "react";
import { Card, Filters } from "../components";
import { Article, Product } from "../types";
import "./panel.scss";

export interface IProps {
  title: string;
  items: (Product | Article)[];
}

const Panel = (props: IProps) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <Filters title={props.title} />
      <div className="content">
        {props.items &&
          props.items.map((item: Article | Product) => {
            return <Card item={item} />;
          })}
      </div>
    </>
  );
};

export default Panel;
