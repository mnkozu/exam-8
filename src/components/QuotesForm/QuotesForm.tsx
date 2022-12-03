import React, {useState} from 'react';
import {Categories, QuoteApi} from "../../types";
import Spinner from "../Spinner/Spinner";

interface Props {
  onSubmit: (post: QuoteApi) => void;
  loading: boolean;
  existingQuote?: QuoteApi;
  categories: Categories[];
}

const QuotesForm: React.FC<Props> = ({onSubmit, loading, existingQuote, categories}) => {
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
            {categories.map((category) => (
             <option key={category.id}>{category.id}</option>
            ))}
          </select>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author" name="author" type="text"
              required
              placeholder="author's name"
              className="form-control"
              value={quote.author}
              onChange={onQuoteChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quote-text">Quote text</label>
            <textarea
              id="text" name="text"
              required
              placeholder="write some text..."
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