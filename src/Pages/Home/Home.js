import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';
import WhyUs from './WhyUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <WhyUs></WhyUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;