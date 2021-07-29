import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinment from '../AvailbleAppoinment/AvailbleAppoinment'

const Appoinment = () => {
    const [selectedDate, setSelectedate] = useState(new Date());
    const handleDateChange=(date)=>{
        setSelectedate(date)
    }
    return (
        <div>
            <Navbar />
            <AppoinmentHeader handleDateChange={handleDateChange}/>
            <AvailableAppoinment date={selectedDate}/>
            <Footer />
        </div>
    );
};

export default Appoinment;