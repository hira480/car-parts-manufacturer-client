import React from 'react';

const OrdersRow = ({ orders, index, refetch }) => {
    const { clientName, name, email, price, paid } = orders
    fetch(`https://whispering-mountain-34563.herokuapp.com/ordered`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
            }
        })
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{clientName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>$ {price}</td>
            <td>
                {
                    !paid &&

                    <div className='flex'>
                        <p className='text-red-500 font-semibold mr-1'>Unpaid</p>
                        <button className="btn btn-xs">X</button>
                    </div>
                }
                {
                    paid && <button className="btn btn-xs">Ship</button>
                }
            </td>

        </tr>
    );
};

export default OrdersRow;