import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';


const Apoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <section>
            <AppoinmentBanner
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            ></AppoinmentBanner>
            <AvailableAppoinment
            selectedDate = {selectedDate}
            ></AvailableAppoinment>
        </section>
    );
};

export default Apoinment;