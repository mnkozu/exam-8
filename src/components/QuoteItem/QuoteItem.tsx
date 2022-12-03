import React from 'react';
import {Quote} from "../../types";

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
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default QuoteItem;