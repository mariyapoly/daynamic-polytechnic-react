import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Teachers></Teachers>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;