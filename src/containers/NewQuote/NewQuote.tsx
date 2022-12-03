import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import QuotesForm from "../../components/QuotesForm/QuotesForm";
import {Categories, QuoteApi} from "../../types";

interface Props {
  categories: Categories[];
}

const NewQuote: React.FC<Props> = ({categories}) => {
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
        <QuotesForm onSubmit={createQuote} loading={loading} categories={categories}/>
      </div>
    </div>
  );
};

export default NewQuote;