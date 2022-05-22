import React from 'react';
import businessBg from '../../assets/images/businessBg.png';

const BusinessSummary = () => {
    return (
        <div style={{
            background: `url(${businessBg})`,
            backgroundSize: 'cover'
        }} className='text-center '>
            <h2 className='text-5xl font-bold text-center text-primary pt-5'>MILLIONS BUSINESS TRUST US</h2>
            <h2 className='text-xl text-center text-white font-medium mt-2 mb-8'>TRY TO UNDERSTAND USER EXPECTATIONS</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-10 mb-14">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                    </div>
                    <div className="stat-title">Countries</div>
                    <div className="stat-value text-primary">78</div>
                    <div className="stat-desc">78+ Around the world</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Feedbacks</div>
                    <div className="stat-value text-primary">525+</div>
                    <div className="stat-desc">More then 725+ feedbacks</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value text-secondary">226M+</div>
                    <div className="stat-desc">120M+ Annual revenue</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <div className="stat-title">Clients</div>
                    <div className="stat-value text-secondary">276+</div>
                    <div className="stat-desc">Happy Clients</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;