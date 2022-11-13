import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import InfoCards from './InfoCards';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {
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