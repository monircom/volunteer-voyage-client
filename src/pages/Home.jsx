import React from 'react';
import Carousel from '../components/Carousel';
import VolunteerNeedsNow from './VolunteerNeedsNow';

const Home = () => {
    return (
        <div>            
            <Carousel />
            <VolunteerNeedsNow></VolunteerNeedsNow>
        </div>
    );
};

export default Home;