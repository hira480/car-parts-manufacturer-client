import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/ordered/${id}`;

    const { data: order, isLoading } = useQuery(['ordered', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(order);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:px-12'>

            <div class="card w-50 max-w-lg bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {order.clientName}</p>
                    <h2 class="card-title">Pay for {order.partsName}</h2>
                    <p>Your order placement for <span className='text-purple-700 font-medium'>{order.partsName}</span> is Confirmed!!
                        You ordered <span className='text-orange-700 font-medium'>{order.orderQuantity}</span> Pcs of <span className='text-orange-700 font-medium'>{order.partsName}</span></p> <p>Your address : <span className='text-orange-700 font-medium'>{order.address}</span> and Phone : <span className='text-orange-700 font-medium'>{order.phone}</span></p>
                    <p>Please Pay : <span className='text-orange-700 font-medium'>$ {order.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-base-100">
                <div class="card-body">


                </div>
            </div>

        </div>
    );
};

export default Payment;