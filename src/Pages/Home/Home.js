import React from 'react';
import Banner from './Banner';
import InfoCards from './InfoCards';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
        </div>
    );
};

export default Home;