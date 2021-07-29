import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';


const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
]
const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },

]
const oralHealth = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" }
]
const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" }
]
const Footer = () => {
    return (
        <footer className='footer-container p-3'>
            <div className='row pt-5 mx-5'>
                <FooterCol key={1} menuTitle={""} menuItems={noNamed}></FooterCol>
                <FooterCol key={2} menuTitle={"Services"} menuItems={services}></FooterCol>
                <FooterCol key={3} menuTitle={"Oral Health"} menuItems={oralHealth}></FooterCol>
                <FooterCol key={4} menuTitle={"Our Address"} menuItems={ourAddress}>
                    <FontAwesomeIcon className='icons' icon={faFacebook} />
                    <FontAwesomeIcon className='icons' icon={faGooglePlus} />
                    <FontAwesomeIcon className='icons' icon={faTwitter} />
                    <p style={{ marginTop: '20px' }}>Call Now</p>
                    <button className='btn btn-king'>+0225000234</button>                 
                </FooterCol>
            </div>
            <div className='text-center mt-5'>
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by ❤️ Mahamudul Hasan</p>
            </div>
        </footer>
    );
};

export default Footer;