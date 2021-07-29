import React, { useState } from 'react';
import image from '../../../images/Mask Group 1.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppoinmentHeader = ({handleDateChange}) => {

    return (
        <main className="row d-flex align-items-center" style={{height:'600px', margin:'0px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3a4256'}}>Appoinment</h1>
                <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
            </div>
            <div className="col-md-6">
                <img src={image} alt="" className='img-fluid' />
            </div>
        </main>
    );
};

export default AppoinmentHeader;