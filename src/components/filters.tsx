import * as React from "react";
import { FaSearch } from "react-icons/fa";
import "./filters.scss";

export interface IProps {
  title: string;
}

const Filters = (props: IProps) => {
  return (
    <>
      <div className="filters">
        <div className="buttons">
          <div className="all">All</div>
          <div className="inactive">Inactive</div>
        </div>
        <div className="search">
          <input type="text" />
          <FaSearch />
        </div>
      </div>
    </>
  );
};

export default Filters;
