import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='contact-container text-center p-5'>
            <h3 className='pt-5' style={{color:'#1cc7c1'}}>Contact Us</h3>
            <h1 style={{color:'white'}}>Always Connect With Us</h1>
            <div className='d-flex justify-content-center pt-5'>
            <form className='w-75 ' onSubmit={handleSubmit(onSubmit)}>
                <input type='email' class="form-control" name="email" placeholder="Email Address*" ref={register({ required: true })} />
                {errors.email && <span>Email is required</span>}<br></br>
                <input type='text' class="form-control" name="subject" placeholder="Subject*" ref={register({ required: true })} />
                {errors.subject && <span>Subject is required</span>}<br></br>
                <textarea name="message" class="form-control" placeholder="Your Message*" ref={register({ required: true })} />
                {errors.message && <span>Message is required</span>}<br></br>
                <input type="submit" className='btn btn-king' />        
            </form>
            </div>
        </div>
    );
};

export default Contact;