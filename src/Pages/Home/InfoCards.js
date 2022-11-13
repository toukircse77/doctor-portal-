import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCart from './InfoCart';

const InfoCards = () => {
    const carts = [
        {
            id:1,
            title:'opening Hours',
            description: 'Open 9AM to 7PM everyday',
            icon: clock,
            bgClass: 'bg-info'
        },
        {
            id:2,
            title:'Visit our Location',
            description: 'Orlando chaliforniya state of America',
            icon: marker,
            bgClass: 'bg-primary'
        },
        {
            id:3,
            title:'contact Us Now',
            description: '+960087566',
            icon: phone,
            bgClass: 'bg-info'
        },
        
    ]
    return (
        <div className='grid md:grid-cols-2 p-5 lg:grid-cols-3 mb-[100px] mt-[100px]  gap-6'>
            {
                carts.map(cart => <InfoCart
                key={cart.id}
                cart = {cart}
                >
                </InfoCart>)
            }
        </div>
    );
};

export default InfoCards;