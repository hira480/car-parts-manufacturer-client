import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deletingPart, refetch, setDeletingPart }) => {
    const { name, _id } = deletingPart;
    const handelDelete = () => {
        fetch(`https://whispering-mountain-34563.herokuapp.com/part/${_id}`, {
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
        <div className=''>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle  " />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box ">
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