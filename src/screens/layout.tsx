import * as React from "react";
import "./layout.scss";

const Layout: React.FC = (props) => {
  return (
    <div className="layout">
      <div className="container">{props.children}</div>
    </div>
  );
};
export default Layout;
