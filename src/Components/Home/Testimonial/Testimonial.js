import React from 'react';
import image from '../../../images/double-quotes-icon-png.png'
import person1 from '../../../images/Ellipse 1.png'
import person2 from '../../../images/Ellipse 2.png'
import person3 from '../../../images/Ellipse 3.png'
import TestimonialDetails from './TestimonialDetails';



const testimonialData=[
    {
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem fuga voluptas consectetur. Aut animi reprehenderit inventore illum eaque unde!',
        name:'Winson Herry',
        place:'New Market',
        image:person1   
    },
    {
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem fuga voluptas consectetur. Aut animi reprehenderit inventore illum eaque unde!',
        name:'Lara John',
        place:'New Market',
        image:person2
    },
    {
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem fuga voluptas consectetur. Aut animi reprehenderit inventore illum eaque unde!',
        name:'Watson Maya',
        place:'New Market',
        image:person3
    }
]

const Testimonial = () => {
    return (
        <section>
            <div className='row p-5'>
                <div className='col-md-6 pt-5'>
                    <h5 style={{ color: '#1cc7c1' }}>TESTINOMIAL</h5>
                    <h2>What's Our Patient <br></br>Says</h2>
                </div>
                <div className='col-md-6 pt-5' >
                    <img style={{ height: '80px', opacity: '70%', float:'right' }} src={image} alt="" />
                </div>
            </div>
            <div className='row p-5'>
                {testimonialData.map(data=> <TestimonialDetails data={data}></TestimonialDetails>)}
            </div>
        </section>
    );
};

export default Testimonial;