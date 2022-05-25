import React from 'react';
import { toast } from 'react-toastify';

const PartsRow = ({ part, index, refetch }) => {
    const { name, available, img, _id } = part;

    const handelDelete = id => {
        fetch(`http://localhost:5000/part/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is Deleted Successfully`);
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td><button onClick={() => handelDelete(_id)} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default PartsRow;