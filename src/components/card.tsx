import * as React from "react";
import { Article, Product } from "../types";
import "./card.scss";

export interface IProps {
  item: Article | Product;
  children?: React.ReactNode;
}

const Card = (props: IProps) => {
  return (
    <>
      <div className="card">a</div>
    </>
  );
};

export default Card;
