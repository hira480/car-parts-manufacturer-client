import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://whispering-mountain-34563.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold mt-10'>Parts We <span className='text-primary'>Manufact</span></h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-3 lg:px-12 mb-12'>
                {
                    parts.slice(-3).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;