import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className='col-md-4 pt-5'>
            <div className='pt-5' >
                <div className='text-center'>
                    <img style={{height:'70px'}} src={service.image} alt="" />
                </div>
                <div >
                    <h4 className='text-center p-3'>{service.title}</h4>
                    <p className='text-secondary'>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;