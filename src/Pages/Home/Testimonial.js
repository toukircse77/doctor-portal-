import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';


const Testimonial = () => {
    const cards = [
        {
            id: 1,
            describtion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae ea, nostrum quos hic numquam facere dolorem tenetur a ratione.",
            image: person1,
            name:'Alison',
            city: 'californiya'
        },
        {
            id: 2,
            describtion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae ea, nostrum quos hic numquam facere dolorem tenetur a ratione.",
            image: person2,
            name:'Bekar',
            city: 'misighan'
        },
        {
            id: 3,
            describtion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae ea, nostrum quos hic numquam facere dolorem tenetur a ratione.",
            image: person3,
            name:'Charclin',
            city: 'Los Angles'
        }
    ]
    return (
        <section className='mt-20 mb-40 p-10'>
            <div className='flex justify-between mb-20'>
                <div>
                <p className='text-info'>Testimonial</p>
                <h2 className='text-3xl'>Testimonial What Our Patients Says</h2>
                </div>
                <div className=''>
                    <img  src={quote} alt="" className='w-full h-20' />
                </div>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cards.map(card => <TestimonialCard
                    key={card.id}
                    card = {card}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;