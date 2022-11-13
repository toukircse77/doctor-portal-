import React from 'react';
import chair from '../../assets/images/chair.png'
import bgpic from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div>
            <div className="hero"
            style={{
                backgroundImage: `url(${bgpic})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="hero-content  justify-between flex-col lg:flex-row-reverse">
                    <div className='mr-[40px]'>
                        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Your new smile starts here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary border-none bg-gradient-to-r from-cyan-300 to-blue-400">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;