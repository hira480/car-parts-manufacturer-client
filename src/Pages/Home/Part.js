import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, available, minimumOrder, price } = part;
    const navigate = useNavigate();
    const navigateToParchase = id => {
        navigate(`/parchaseItem/${id}`);
    }
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
                    <button onClick={() => navigateToParchase(_id)} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Purchase</button>

                    {/* <Link to={`parchaseItem/${_id}`}><button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Purchase</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Part;