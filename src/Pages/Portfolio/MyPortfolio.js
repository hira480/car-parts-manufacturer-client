import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    const url = `"https://web.facebook.com/mannan.hira.182/"`
    return (
        <div className='lg:px-24'>
            <h2 className='text-3xl font-semibold my-5'>My Portfolio</h2>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-3xl font-bold text-purple-600'>Md. Abdul Mannan</h2>
                        <p className='text-orange-700 font-medium'>hiramannan8@gmail.com </p>
                        <h2 className='text-xl, font-semibold'>Bsc (Hons) in Computer Science and Engineering.
                            Dhaka City College, Dhaka.</h2>
                        <p>Hi there! I am trying to build up my career with web development. I have more than 1 years of experience about web development. Already i have learn so many things about web development. My skills about web development and technology i can use is :</p>
                        <ol>
                            <li>HTML5 and CSS3</li>
                            <li>JavaScript, ES6</li>
                            <li>ReactJs</li>
                            <li>NodeJs</li>
                            <li>MongoDb</li>
                            <li>Firebase authentication, React Firebase hooks</li>
                            <li>ExpressJs</li>
                        </ol>
                        <p>Some of my project link is given below:</p>
                        <a href="https://fitness-trainer-a16fc.web.app/" target="_blank" rel="noreferrer">
                            <button className='btn btn-primary'>Click</button>
                        </a>
                        <a href="https://hira-time-zone.netlify.app/" target="_blank" rel="noreferrer">
                            <button className='btn btn-primary'>Click</button>
                        </a>
                        <a href="https://warehouse-management-2244e.web.app/" target="_blank" rel="noreferrer">
                            <button className='btn btn-primary'>Click</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;