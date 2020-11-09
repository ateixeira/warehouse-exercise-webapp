import * as React from "react";
import "./panel.scss";

export interface IProps {
  title: string;
}

const Panel = (props: IProps) => {
  return <div className="title">{props.title}</div>;
};

export default Panel;