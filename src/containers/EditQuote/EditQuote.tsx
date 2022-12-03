import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import QuotesForm from "../../components/QuotesForm/QuotesForm";
import axiosApi from "../../axiosApi";
import {QuoteApi} from "../../types";

const EditQuote = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<QuoteApi | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOneQuote = useCallback( async () => {
    try {
      setLoading(true);
      const quoteResponse = await axiosApi.get<QuoteApi>('/quotes/' + id + '.json');
      setQuote(quoteResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOneQuote().catch(console.error);
  }, [fetchOneQuote]);

  const updateQuote = async (quote: QuoteApi) => {
    try {
      setLoading(true);
      await axiosApi.put('/quotes/' + id + '.json', quote);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-2">
      <div className="col">
        {quote && (
          <QuotesForm onSubmit={updateQuote} existingQuote={quote} loading={loading}/>
        )}
      </div>
    </div>
  );
};

export default EditQuote;