import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://whispering-mountain-34563.herokuapp.com/ordered?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setOrders(data);
                })
        }
    }, [user, navigate]);

    const handelDelete = id => {
        const proceed = window.confirm('It will also delete from Database. Are you sure you want to cancel your order?');
        if (proceed) {
            const url = `https://whispering-mountain-34563.herokuapp.com/ordered/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:px-12'>
            <h2 className='text-2xl font-semibold my-5'>My Orders {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Parts</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.clientName}</td>
                                <td>{order.name}</td>
                                <td>$ {order.price}</td>
                                <td>{order.orderQuantity}</td>
                                <td>
                                    {(order.price && !order.paid) && <>
                                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>

                                        <button onClick={() => handelDelete(order._id)} className='ml-2 btn btn-xs btn-error'>Cancel</button>
                                    </>}

                                    {(order.price && order.paid) && <>
                                        <span className='text-success'>Paid</span>
                                        <p>Transaction Id: <span className='text-success'>{order.transectionId}</span></p>
                                    </>
                                    }
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;