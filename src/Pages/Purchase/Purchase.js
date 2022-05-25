import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from "axios";
import useParts from '../../hooks/useParts';
import { toast } from 'react-toastify';
import purches from '../../assets/images/purches.png';


const Purchase = () => {
    const { productId } = useParams();
    const [part] = useParts(productId);
    const { _id, name, img, minimumOrder, price, available, description } = part;
    const [user] = useAuthState(auth);

    const handelPurchase = event => {
        event.preventDefault();

        const orderQuantity = event.target.quantity.value;
        console.log(orderQuantity);
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const ordered = {
            partsId: _id,
            partsName: name,
            price,
            client: user.email,
            clientName: user.displayName,
            phone,
            address,
            orderQuantity
        }

        fetch('http://localhost:5000/ordered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordered),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    if (
                        orderQuantity < parseInt(available) &&
                        orderQuantity >= parseInt(minimumOrder)
                    ) {
                        const delivaredQuantity = parseInt(available) - orderQuantity;
                        const updatedQuantity = async () => {
                            const url = `http://localhost:5000/part/${productId}`;
                            const { data } = await axios.put(url, { delivaredQuantity });
                            if (data.acknowledged) {
                                toast.success(`Order Placed Successfully for ${part.name}`);
                                event.target.reset();
                            }
                        };
                        updatedQuantity();
                    } else {
                        toast.error('Order Quantity less then minimum order');
                    }
                } else {
                    toast.error('Order Place failed');
                }
            })


    }

    return (
        <div style={{
            background: `url(${purches})`,
            backgroundSize: 'cover'
        }} className='lg:px-12'>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 px-2 align-center justify-center lg:px-12 mb-12 "> */}
            <div className="hero-content py-10 flex-col lg:flex-row  ">

                <div className="card justify-center w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-primary">{name}</h2>
                        <p className='text-secondary font-semibold'>Price Per Unit :  <span className='text-orange-500'>${price}</span></p>
                        <p className=' text-secondary'>Available Quantity : <span className='text-orange-500 font-semibold'>{available}</span></p>
                        <p className='text-secondary'>Minimum Order Quantity <span className='text-orange-500 font-semibold'>{minimumOrder}</span></p>
                        <p className=''>{description}</p>
                    </div>
                </div>


                <div className="card lg:ml-14 w-96 bg-base-100 shadow-xl">
                    <h2 className="text-center text-2xl font-bold mt-3">Purchase</h2>

                    <form onSubmit={handelPurchase} className='grid grid-cols-1 gap-3 py-5 justify-items-center mt-4'>
                        <input type="text" disabled value={name} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Place An Order" className="btn w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;