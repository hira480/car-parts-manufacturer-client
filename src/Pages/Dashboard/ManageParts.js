import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import PartsRow from './PartsRow';

const ManageParts = () => {
    const [deletingPart, setDeletingPart] = useState(null);


    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://whispering-mountain-34563.herokuapp.com/part', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:px-12'>
            <h2 className='text-2xl font-semibold my-5'>Manage Items {parts.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <PartsRow
                                key={part._id}
                                part={part}
                                index={index}
                                refetch={refetch}
                                setDeletingPart={setDeletingPart}
                            ></PartsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingPart && <DeleteConfirm
                deletingPart={deletingPart}
                refetch={refetch}
                setDeletingPart={setDeletingPart}
            ></DeleteConfirm>}
        </div>
    );
};

export default ManageParts;