import React, {useState} from 'react';
import QuotesForm from "../../components/QuotesForm/QuotesForm";
import {useNavigate} from "react-router-dom";
import {QuoteApi} from "../../types";
import axiosApi from "../../axiosApi";

const NewQuote = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createQuote = async (quote: QuoteApi) => {
    try {
      setLoading(true);
      await axiosApi.post('quotes.json', quote);
      navigate('/');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="row mt-2">
      <div className="col">
        <QuotesForm onSubmit={createQuote} loading={loading}/>
      </div>
    </div>
  );
};

export default NewQuote;