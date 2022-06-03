import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1DwyJAH8q8uEVYs1gJMDYrFovUV3aBm6L9C0drCV12ILnYk8MMrpWWuZaSTLf9koM1xQAFngWiQ3mgEs8B7BCl00Zhc8MRxP');

const Payment = () => {
    const { id } = useParams();
    const url = `https://whispering-mountain-34563.herokuapp.com/ordered/${id}`;

    const { data: order, isLoading } = useQuery(['ordered', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    // console.log(order);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:px-12'>

            <div className="card w-50 max-w-lg bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {order.clientName}</p>
                    <h2 className="card-title">Pay for {order.partsName}</h2>
                    <p>Your order placement for <span className='text-purple-700 font-medium'>{order.partsName}</span> is Confirmed!!
                        You ordered <span className='text-orange-700 font-medium'>{order.orderQuantity}</span> Pcs of <span className='text-orange-700 font-medium'>{order.partsName}</span></p> <p>Your address : <span className='text-orange-700 font-medium'>{order.address}</span> and Phone : <span className='text-orange-700 font-medium'>{order.phone}</span></p>
                    <p>Please Pay : <span className='text-orange-700 font-medium'>$ {order.price}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;