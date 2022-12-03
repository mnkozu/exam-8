import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <h4>Quotes category</h4>
      <ul className="list-group-nav">
        <Link  to={"/quotes"} className="list-group-item nav-link">All</Link>
      </ul>
    </div>
  );
};

export default Sidebar;