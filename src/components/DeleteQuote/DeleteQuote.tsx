import React, {useCallback, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Modal from "../Modal/Modal";

const DeleteQuote = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const cancel = () => {
    setShowModal(prev => !prev);
    navigate('/');
  };

  const deleteQuote = useCallback(async () => {
    try {
      await axiosApi.delete('/quotes/' + id + '.json');
      setShowModal(prev => !prev);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  }, [id, navigate]);

  return (
    <Modal show={showModal} title="Delete" onClose={cancel}>
        <div className="modal-body">
          <p>Do you want to delete?</p>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-danger"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={deleteQuote}
          >
            Delete
          </button>
        </div>
      </Modal>
  );
};

export default DeleteQuote;