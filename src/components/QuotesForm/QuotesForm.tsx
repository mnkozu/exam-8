import React, {useState} from 'react';
import {QuoteApi} from "../../types";
import Spinner from "../Spinner/Spinner";

interface Props {
  onSubmit: (post: QuoteApi) => void;
  loading: boolean;
  existingQuote?: QuoteApi;
}

const QuotesForm: React.FC<Props> = ({onSubmit, loading, existingQuote}) => {
  const [quote, setQuote] = useState(existingQuote ? existingQuote : {
    category: '',
    author: '',
    text: '',
  });

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setQuote(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(quote);
  };

  return (
    <>
      {loading ? <Spinner/> : (
        <form onSubmit={onFormSubmit}>
          <h4>{existingQuote ? 'Edit a quote' : 'Submit new quote'}</h4>
          <select
            className="form-select"
            aria-label="Default select example"
            required
            name="category"
            value={quote.category}
            onChange={onQuoteChange}
          >
            <option disabled value="">Select category</option>
            <option>Star wars</option>
            <option>Famous people</option>
            <option>Saying</option>
            <option>Humour</option>
            <option>Motivational</option>
          </select>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author" name="author" type="text"
              className="form-control"
              value={quote.author}
              onChange={onQuoteChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quote-text">Quote text</label>
            <textarea
              id="text" name="text"
              className="form-control"
              value={quote.text}
              onChange={onQuoteChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">{existingQuote ? 'Save changes' : 'Post'}</button>
        </form>
      )}
    </>
  );
};

export default QuotesForm;