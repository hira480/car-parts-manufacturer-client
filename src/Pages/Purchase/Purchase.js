import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useParts from '../../hooks/useParts';


const Purchase = () => {
    const { productId } = useParams();
    const [part] = useParts(productId);
    const { _id, name, img, minimumOrder, price, available, description } = part;
    const [user] = useAuthState(auth);

    const handelPurchase = event => {
        event.preventDefault();


        const booking = {
            partsId: _id,
            partsName: name,
            price,
            client: user.email,
            clientName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
    }

    return (
        <div className='my-10 lg:px-12'>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 px-2 align-center justify-center lg:px-12 mb-12 ">

                <div class="card justify-items-center w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-3xl font-bold text-primary">{name}</h2>
                        <p className='text-secondary font-semibold'>Price Per Unit :  <span className='text-orange-500'>${price}</span></p>
                        <p className=' text-secondary'>Available Quantity : <span className='text-orange-500 font-semibold'>{available}</span></p>
                        <p className='text-secondary'>Minimum Order Quantity <span className='text-orange-500 font-semibold'>{minimumOrder}</span></p>
                        <p className=''>{description}</p>
                    </div>
                </div>


                <div class="card  w-96 bg-base-100 shadow-xl">
                    <h2 class="text-center text-2xl font-bold mt-3">Purchase</h2>

                    <form onSubmit={handelPurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={name} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Place An Order" className="btn w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;