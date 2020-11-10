import * as React from "react";
import { Card, Data, Filters } from "../components";
import { Article, PanelTypes, Product } from "../types";
import "./panel.scss";

export interface IProps {
  title: string;
  type: PanelTypes;
  loading: boolean;
  items: (Product | Article)[];
}

const Panel = (props: IProps) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <Data items={props.items} />
      <Filters title={props.title} />
      <div className="content">
        <div className="header"></div>
        {props.items &&
          props.items.map((item: Article | Product, idx) => {
            return (
              <Card key={`${item.name}idx`} item={item} type={props.type} />
            );
          })}
      </div>
    </>
  );
};

export default Panel;
