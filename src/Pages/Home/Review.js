import React from 'react';

const Review = ({ review }) => {
    const { name, reviews } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;