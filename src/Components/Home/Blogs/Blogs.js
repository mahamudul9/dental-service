import React from 'react';
import BlogDetails from './BlogDetails';
import image from '../../../images/Ellipse 1.png'

const blogData = [
    {
        image: image,
        name:'Dr. Kardi',
        date:'23 June 2021',
        title: 'Check at least one doctor in a year',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, itaque.'
    },
    {
        image: image,
        name:'Dr. Kardi',
        date:'23 June 2021',
        title: 'Brushing twice a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, itaque.'
    },
    {
        image: image,
        name:'Dr. Kardi',
        date:'23 June 2021',
        title: 'The tooth cancer is taking challenges',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, itaque.'
    }
]

const Blogs = () => {
    return (
            <section className='services-container pt-5'>
            <div className='text-center'>
                <h4 style={{ color: '#1cc7c1' }}>Our Services</h4>
                <h2>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <section className='row mt-3 px-5'>
                    {blogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)}
                </section>
            </div>
        </section>
    );
};

export default Blogs;