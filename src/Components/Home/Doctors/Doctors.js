import React from 'react';
import image from '../../../images/5790-removebg.png'
import DoctorsDetails from './DoctorsDetails';

const doctorData=[
    {
        image:image,
        name:"Dr. Caudio",
        phone:"+13 155 957 075"
    },
    {
        image:image,
        name:"Dr. Caudio",
        phone:"+13 155 957 075"
    },
    {
        image:image,
        name:"Dr. Caudio",
        phone:"+13 155 957 075"
    }
]

const Doctors = () => {
    return (
        <section className="pt-5 pb-5">
            <h3 style={{color:'#1cc7c1'}} className='text-center pt-5'>Our Doctors</h3>
            <div className='d-flex justify-content-center'>
            <div className='row w-75 '>
                {doctorData.map(doctor=> <DoctorsDetails doctor={doctor}></DoctorsDetails>)}
            </div>
            </div>
        </section>
    );
};

export default Doctors;