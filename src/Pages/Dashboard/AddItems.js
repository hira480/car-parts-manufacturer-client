import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddItems = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/part').then(res => res.json()));

    const imageStorageKey = '3de7ce9c3634018bf899a6bbaf973da5';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newParts = {
                        name: data.name,
                        available: data.available,
                        minimumOrder: data.minimumOrder,
                        price: data.price,
                        description: data.description,
                        img: img
                    }
                    // send to database
                    fetch('http://localhost:5000/part', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newParts)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('NewParts', inserted);
                            if (inserted.insertedId) {
                                toast.success('New Parts Added Successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add New Parts');
                            }
                        })
                }
                console.log('imgbb', result);
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:px-12'>
            <h2 className='text-2xl font-semibold my-5'>Add New Items</h2>
            <div class="card w-96  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-center font-bold">Add item</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Input field for name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered input-sm w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Input field for available amount */}
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="text"
                                placeholder="Storage Quantity"
                                className="input input-bordered input-sm w-full max-w-xs"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'Enter how meny amounts are available'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                            </label>
                        </div>

                        {/* Input field for Minimum order */}
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="text"
                                placeholder="Minimum Order"
                                className="input input-bordered input-sm w-full max-w-xs"
                                {...register("minimumOrder", {
                                    required: {
                                        value: true,
                                        message: 'Enter minimum amount claint can parchase'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                            </label>
                        </div>

                        {/* Input field for Minimum order */}
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="text"
                                placeholder="Price"
                                className="input input-bordered input-sm w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Enter Price per unit'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>
                        {/* Input field for Description */}
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="text"
                                placeholder="Description"
                                className="textarea textarea-bordered input-sm w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Enter short description'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>

                        {/* Image  */}
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="file"
                                className="input input-bordered input-sm w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value='Add New Item' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddItems;