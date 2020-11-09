import * as React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="logo">WAREHOUSE MANAGEMENT</div>
      <nav>
        <ul>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div className="contact"></div>
    </div>
  );
};

export default Menu;
