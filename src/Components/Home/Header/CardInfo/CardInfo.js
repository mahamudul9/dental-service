import React from 'react';
import './CardInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardInfo = ({ info }) => {
    return (
        <div className='col-md-4'>
            <div className={`d-flex justify-content-center align-items-center text-white info-${info.color}`} style={{height:'110px'}}>
                <div className='me-3'>
                <FontAwesomeIcon className='icon' icon={info.icon}/>
                </div>
                <div>
                    <h6>{info.Title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;