import React, {useCallback, useEffect, useState} from 'react';
import {Quote, QuoteList} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import QuoteItem from "../../components/QuoteItem/QuoteItem";

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      const quotesResponse = await axiosApi.get<QuoteList>('quotes.json');

      const quotes = Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote;
      });

      setQuotes(quotes);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  return (
    <div className="row mt-2">
      <div className="col-7">
        {loading ? <Spinner/> : quotes.map(quote => (
          <QuoteItem quote={quote} key={quote.id}/>
        ))}
      </div>
    </div>
  );
};

export default Quotes;