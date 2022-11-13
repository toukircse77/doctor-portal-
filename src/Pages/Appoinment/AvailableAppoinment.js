import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOptions from './AppoinmentOptions';

const AvailableAppoinment = ({ selectedDate }) => {
    const [appoinmentOption, setAppoinmentOptions] = useState([]);
    useEffect(() => {
        fetch('AppoinmentOption.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])
    return (
        <section>
            <p className='text-info pb-10 text-center font-bold'>Available Date: {format(selectedDate, 'PPPP')}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appoinmentOption.map(option => <AppoinmentOptions 
                key={option._id}
                option = {option}
                ></AppoinmentOptions>)
            }
            </div>
           
        </section>

    );
};

export default AvailableAppoinment;