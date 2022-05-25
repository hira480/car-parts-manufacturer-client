import React from 'react';
import { toast } from 'react-toastify';

const PartsRow = ({ part, index, refetch, setDeletingPart }) => {
    const { name, available, img, _id } = part;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 mask mask-squircle">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td>
                <label onClick={() => setDeletingPart(part)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                {/* <button onClick={() => handelDelete(_id)} className="btn btn-xs btn-error">Delete</button> */}
            </td>
        </tr>
    );
};

export default PartsRow;