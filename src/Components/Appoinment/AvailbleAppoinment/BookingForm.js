import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './BookingForm.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '400px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const BookingForm = (props) => {
  const { isOpen, onAfterOpen, onRequestClose, name } = props;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className='d-flex justify-content-around align-items-center'>
        <h4 className='text-brand'>{name}</h4>
        <FontAwesomeIcon style={{ color: 'red', cursor: 'pointer' }} onClick={onRequestClose} icon={faTimes} />
      </div>

      <form className='modalForm' onSubmit={handleSubmit(onSubmit)}>
        <input name="name" type="text" placeholder='Name' ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}<br></br>
        <input name="phone" type="tel" placeholder='Phone' ref={register({ required: true })} />
        {errors.phone && <span>This field is required</span>}<br></br>
        <input name='email' type="email" placeholder='Email' ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}<br></br>
        <input name="time" type="time" placeholder='Select time' ref={register({ required: true })} />
        {errors.time && <span>This field is required</span>}<br></br>
        <input name='date' type="date" placeholder='mm/dd/yy' ref={register({ required: true })} />
        {errors.date && <span>This field is required</span>}<br></br>
        <input type="submit" className='btn btn-king' />
      </form>
    </Modal>
  );
};

export default BookingForm;