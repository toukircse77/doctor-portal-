import React, { useEffect, useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';


const Apoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        },);
    },[])
    if(loading){
        return <div className='h-[80vh] flex items-center justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div>
    }
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