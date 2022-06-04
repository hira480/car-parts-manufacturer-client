import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PurchasePage = () => {
    const { productId } = useParams();
    const [user, loading] = useAuthState(auth);

    const { data: part, isLoading, refetch } = useQuery('ordar', () =>
        fetch(`https://whispering-mountain-34563.herokuapp.com/part/${productId}`).then(res => res.json())
    );
    // console.log(part)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        if (data) {
            const ordered = { ...data, price: part.price };
            console.log(ordered);
            fetch('https://whispering-mountain-34563.herokuapp.com/ordered', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(ordered),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Order placed Successfully');
                        reset();
                        refetch();
                    }
                });
        } else {
            toast.error('Order failed');
        }

    };
    if (loading || isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className=" hero-content py-10 flex-col lg:flex-row ">

                <div className="card justify-center w-96 bg-base-100 shadow-xl">
                    <figure><img src={part.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-primary">{part.name}</h2>
                        <p className='text-secondary font-semibold'>Price Per Unit :  <span className='text-orange-500'>${part.price}</span></p>
                        <p className=' text-secondary'>Available Quantity : <span className='text-orange-500 font-semibold'>{part.available}</span></p>
                        <p className='text-secondary'>Minimum Order Quantity <span className='text-orange-500 font-semibold'>{part.minimumOrder}</span></p>
                        <p className=''>{part.description}</p>
                    </div>
                </div>


                <div className="card lg:ml-14 w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold mt-1 mb-2">Purchase Info</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                value={part.name}
                                className="input input-bordered w-full mb-2 max-w-xs"
                                {...register("name", { required: true })}
                            />
                            <input
                                value={user.displayName}
                                className="input input-bordered w-full mb-2 max-w-xs"
                                {...register("clientName", { required: true })}
                            />
                            <input
                                value={user.email}
                                className="input input-bordered w-full mb-2 max-w-xs"
                                {...register("email", { required: true })}
                            />
                            <input
                                placeholder="Address"
                                className="input input-bordered w-full mb-2 max-w-xs"
                                {...register("address", { required: true })}
                            />
                            <input
                                placeholder="Phone Number"
                                className="input input-bordered w-full mb-2 max-w-xs"
                                {...register("phone", { required: true })}
                            />
                            <input
                                placeholder='Order Quantity'
                                defaultValue={part.minimumOrder}
                                className="input input-bordered w-full mb-2 max-w-xs"
                                {...register("orderQuantity", {
                                    min: part.minimumOrder,
                                    max: part.available
                                })}
                            />
                            {errors.orderQuantity && <><p className='text-red-500'>Invalid Quantity</p></>}

                            <input className="btn w-full max-w-xs" value="Place An Order" type="submit" />
                        </form>

                    </div>
                </div>




            </div>
        </div>
    );
};

export default PurchasePage;