import React from 'react';
import floride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import shining from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            id: 1,
            name:'Floride tratment',
            describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, nemo!",
            icon: floride 
        },
        {
            id: 2,
            name:'Cavity Filling',
            describtion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tempore iste officia",
            icon: cavity 
        },
        {
            id: 3,
            name:'teeth whitening',
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde",
            icon: shining 
        },
    ]
    return (
        <div className='mt-[100px]'>
           <div className='mb-20'>
           <h3 className='text-xl text-center text-info'>Our Services</h3>
            <h1 className='text-3xl text-center text-semibold'>Services We Provide</h1>
           </div>
           <div className='grid md:grid-cols-2 , text-center gap-3  lg:grid-cols-3'>
         {
                services.map(service => <ServiceCard
                key={service.id}
                service={service}
                ></ServiceCard>)
         }
            </div> 
        </div>
    );
};

export default Services;