import React from 'react';
import styring1 from '../../assets/images/styring1.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const WhyUs = () => {
    return (
        <div className="hero min-h-screen my-16">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className=''>
                    <img src={styring1} className="max-w-sm w-full lg:ml-44 rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700 " alt='' />
                </div>
                <div className='lg:pr-32'>
                    <h1 className="text-5xl font-bold">Our Upcomming latest Products</h1>
                    <p className="py-6">
                        Our customer feedbact is totally outstanding. There feedbacks motivate us to increase our production. To fulfill our honourable customers demand we are started manufacturing styrings. It wil change your using experiences. Our architectural desine will make  make our customers satisfyed.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;