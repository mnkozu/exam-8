import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import QuoteItem from "../../components/QuoteItem/QuoteItem";
import Spinner from "../../components/Spinner/Spinner";
import {Categories, Quote, QuoteList} from "../../types";
import Sidebar from "../../components/Sidebar/Sidebar";
import {useParams} from "react-router-dom";

interface Props {
  categories: Categories[];
}

const Quotes: React.FC<Props> = ({categories}) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  const quotesURL = id ? `/quotes.json?orderBy="category"&equalTo="${id}"` : "/quotes.json";

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      const quotesResponse = await axiosApi.get<QuoteList>(quotesURL);

      const quotes = Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote;
      });

      setQuotes(quotes);
    } finally {
      setLoading(false);
    }
  }, [quotesURL]);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  const empty = (
    <div>
      <h3>It's empty! Add some quote in the section "Submit new quote"</h3>
    </div>
  );

  return (
    <div className="row mt-2">
      <div className="col-4">
        <Sidebar categories={categories}/>
      </div>
      {quotes.length === 0 ? empty : (
        <div className="col-8">
          {loading ? <Spinner/> : quotes.map(quote => (
            <QuoteItem quote={quote} key={quote.id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quotes;