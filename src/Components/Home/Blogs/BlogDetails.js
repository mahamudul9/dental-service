import React from 'react';
import './BlogDetails.css'

const BlogDetails = ({ blog }) => {
    return (
        <div className='col-md-4'>
            <div className='p-3 cards' >
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <img style={{ height: '70px' }} src={blog.image} alt="" />
                    </div>
                    <div>
                        <h5>{blog.name}</h5>
                        <p >{blog.date}</p>
                    </div>
                </div>
                <div >
                    <h4 className='p-3'>{blog.title}</h4>
                    <p >{blog.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;