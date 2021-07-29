import React from 'react';
import flurote from '../../../../images/001-dental.png'
import cavity from '../../../../images/tooth (1).png'
import whitening from '../../../../images/tooth.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        image: flurote,
        title: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, itaque.'
    },
    {
        image: cavity,
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, itaque.'
    },
    {
        image: whitening,
        title: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, itaque.'
    }
]

const Services = () => {

    return (
        <section className='services-container pt-5'>
            <div className='text-center'>
                <h4 style={{ color: '#1cc7c1' }}>Our Services</h4>
                <h2>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <section className='row w-75 mt-3'>
                    {serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)}
                </section>
            </div>
        </section>
    );
};

export default Services;