import React, {useState} from 'react';

const QuotesForm = () => {
  const [quote, setQuote] = useState({
    category: '',
    author: '',
    text: '',
  });

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setQuote(prev => ({...prev, [name]: value}));
  };

  return (
    <form>
      <h4>Submit new quote</h4>
      <select
        className="form-select"
        aria-label="Default select example"
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
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default QuotesForm;