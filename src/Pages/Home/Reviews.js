import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = (data) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://whispering-mountain-34563.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='px-2 lg:px-12 my-8'>
            <div>
                <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                <h2 className='text-3xl'>What Our Clients Say</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-2'>
                {
                    reviews.slice(-4).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;