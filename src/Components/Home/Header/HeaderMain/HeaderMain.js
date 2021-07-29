import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../images/Mask Group 1.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:'600px', margin:'0px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3a4256'}}>Your New Smile<br></br>Start Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim ullam deleniti ea eos! Laudantium architecto, fugiat ut quos eligendi aspernatur dolores perspiciatis expedita magnam, laboriosam cum at quidem vero?</p>
                <Link to='/appoinment'><button className='btn btn-king'>GET APPOINMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={image} alt="" className='img-fluid' />
            </div>
        </main>
    );
};

export default HeaderMain;