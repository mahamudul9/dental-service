import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const DoctorsDetails = ({doctor}) => {
    return (
        <div className='col-md-4'>
            <div className='text-center'>
                <img style={{height:'300px'}} src={doctor.image} alt="" />
                <h4 className='pt-2' style={{color:'#3a4256 '}}>{doctor.name}</h4>
                <p><FontAwesomeIcon style={{color:'#1cc7c1'}} icon={faPhoneAlt}></FontAwesomeIcon> {doctor.phone}</p> 
            </div>
        </div>       
    );
};

export default DoctorsDetails;