import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deletingPart, refetch, setDeletingPart }) => {
    const { name, _id } = deletingPart;
    const handelDelete = () => {
        fetch(`http://localhost:5000/part/${_id}`, {
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
                    setDeletingPart(null);
                    refetch();
                }
            })
    }
    return (
        <div >
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete {name} ?</h3>
                    <p className="py-4">If you delete {name} it will delete from home page and also delete from database.</p>
                    <div className="modal-action">
                        <button onClick={() => handelDelete()} className="btn btn-sm btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;