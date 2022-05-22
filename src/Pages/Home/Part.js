import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Part = ({ part }) => {
    const { name, img, description, available, minimumOrder, price } = part;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-success font-semibold'>Available Quantity : {available}</p>
                <p>Minimum Order : {minimumOrder} Pcs</p>
                <p>Price:<span className='text-orange-500 font-semibold'> ${price}</span></p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <PrimaryButton>Purchase</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Part;