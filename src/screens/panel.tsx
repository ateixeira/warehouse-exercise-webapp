import * as React from "react";
import { Filters } from "../components";
import "./panel.scss";

export interface IProps {
  title: string;
}

const Panel = (props: IProps) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <Filters title={props.title} />
    </>
  );
};

export default Panel;
