import React from 'react';
import {NavLink} from "react-router-dom";
import {Categories} from "../../types";

interface Props {
  categories: Categories[];
}

const Sidebar: React.FC<Props> = ({categories}) => {
  return (
    <div className="border border-2 border-secondary p-3">
      <h4>Quotes category</h4>
      <ul className="list-group-nav p-0">
        <NavLink  to={"/"} className="list-group-item nav-link p-2 ">All</NavLink>
        {categories.map((category) => (
          <NavLink
            to={`/quotes/category/${category.id}`}
            className="list-group-item nav-link p-2"
            key={category.id}
          >
            {category.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;