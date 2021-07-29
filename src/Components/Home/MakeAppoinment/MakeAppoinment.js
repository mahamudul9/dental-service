import React from 'react';
import image from '../../../images/5790-removebg.png'
import './MakeApponiment.css'

const MakeAppoinment = () => {
    return (
        <section className='pt-5'>
            <div className='appoinment row justify-content-center mt-5' style={{margin:'0px'}}>
                <div className="col-md-4">
                    <img  src={image} alt="" className='img-fluid appoinment-image'/>
                </div>
                <div className="col-md-6 align-self-center text-white">
                    <h5 style={{color:'#1cc7c1'}}>APPOINMENT</h5>
                    <h2>Make An Appoinment <br></br>Today</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus necessitatibus sed ipsa repellat. Facilis unde exercitationem odio in officiis non.</p>
                    <button className='btn btn-king'>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;