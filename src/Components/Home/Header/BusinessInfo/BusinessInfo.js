import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import { faClock, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData=[
        {
            Title:'Opening Hour',
            description:"24/7 hours",
            icon:faClock,
            color:"primary"

        },
        {
            Title:'Visit Our Location',
            description:"New Market, Dhaka",
            icon:faMapMarkedAlt,
            color:"secondary"

        },
        {
            Title:'Contact us now',
            description:"+88 01575027971",
            icon:faPhoneAlt,
            color:"primary"

        }
    ]
    return (
        <div className='d-flex justify-content-center'>
        <section className='row w-75'>
            {infosData.map(info=><CardInfo info={info}></CardInfo>)}
        </section>
        </div>
    );
};

export default BusinessInfo;