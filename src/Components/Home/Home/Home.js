import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Header from '../Header/Header/Header'
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeatureService/>
            <MakeAppoinment/>
            <Testimonial/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;