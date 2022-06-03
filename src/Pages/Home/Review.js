import React from 'react';

const Review = ({ review }) => {
    const { rating, name, reviewText } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{reviewText}</p>
                <p style={{ color: "#FBBD23" }} className='font-bold'>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Review;