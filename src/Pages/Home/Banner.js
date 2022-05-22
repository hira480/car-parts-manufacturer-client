import React from 'react';
// import autoParts from '../../assets/images/autoParts.png';
import ab from '../../assets/images/ab.png';
import all from '../../assets/images/all.jpg'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div style={{
            background: `url(${ab})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-12">
                <img src={all} className="max-w-lg w-full  rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">The Best Quality of Parts are Manufactured by Us</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Start</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;