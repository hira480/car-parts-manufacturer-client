import React, { useEffect, useState } from 'react';
import Purchase from '../Purchase/Purchase';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold mt-5'>Parts We <span className='text-primary'>Manufact</span></h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-2 lg:px-12 mb-12'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;