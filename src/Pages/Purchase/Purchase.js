import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';

const Purchase = () => {

    const { partId } = useParams();
    const [part] = useParts(partId);
    const { _id, name, img, minimumOrder, price, available, description } = part;


    // const { id } = useParams();
    // const url = `http://localhost:5000/part/${id}`;
    // console.log(url);
    // const { data: parts, isLoading } = useQuery(['parts', id], () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // }).then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2>This is Parchase {part.name} </h2>
        </div>
    );
};

export default Purchase;