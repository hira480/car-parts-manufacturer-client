import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PartsRow from './PartsRow';

const ManageParts = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/part', {
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
                            ></PartsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageParts;