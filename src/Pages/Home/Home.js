import React, { useEffect, useState } from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import InfoCards from './InfoCards';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {

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
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;