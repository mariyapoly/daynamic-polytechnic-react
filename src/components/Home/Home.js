import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;