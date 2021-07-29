import React, { useState } from 'react';

import BookingForm from './BookingForm';

const BookingCard = ({ data }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='col-md-4 mb-5'>
      <div className='card p-5 text-center'>
        <h4 className='text-brand'>{data.subject}</h4>
        <h6>{data.visitingHour}</h6>
        <p>{data.totalSpace} Space Available</p>
        <button className='btn btn-king' onClick={openModal}>Book Appoinment</button>
      </div>
      <BookingForm 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        name={data.subject}>
      </BookingForm>
    </div>
  );
};

export default BookingCard;