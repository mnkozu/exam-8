import React from 'react';
import {Quote} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  quote: Quote;
}

const QuoteItem: React.FC<Props> = ({quote}) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{quote.text}</p>
        <p className="text-secondary">- {quote.author}</p>
      </div>
      <div className="card-footer">
        <Link to={"/quotes/edit/" + quote.id} className="btn btn-primary m-1">Edit</Link>
        <Link to={"/quotes/delete/" + quote.id} className="btn btn-danger m-1">Delete</Link>
      </div>
    </div>
  );
};

export default QuoteItem;