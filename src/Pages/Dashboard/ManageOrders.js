import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrdersRow from './OrdersRow';

const ManageOrders = () => {
    const { data: ordered, isLoading, refetch } = useQuery('users', () => fetch(`https://whispering-mountain-34563.herokuapp.com/ordered`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:px-12'>
            <h2 className='text-2xl font-semibold my-5'>Manage Orders {ordered.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ordered.map((orders, index) => <OrdersRow
                                key={orders._id}
                                orders={orders}
                                index={index}
                                refetch={refetch}
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;