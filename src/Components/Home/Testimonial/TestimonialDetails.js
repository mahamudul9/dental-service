import React from 'react';

const TestimonialDetails = ({data}) => {
    return (
        <div className="col-md-4">
            <div className='card p-5'>
                <div>
                    <h5><small>{data.feedback}</small></h5>
                </div>
                <div className='d-flex mt-3 align-items-center justify-content-around'>
                    <div>
                        <img src={data.image} alt="" />
                    </div>
                    <div className=''>
                        <h5 style={{ color: '#1cc7c1' }}>{data.name}</h5>
                        <p>{data.place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;