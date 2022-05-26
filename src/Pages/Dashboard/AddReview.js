import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handelReview = event => {
        event.preventDefault();
        const review = event.target.slot.value;
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <form onSubmit={handelReview} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-md" />

                        <textarea type="text" name='review' placeholder="Review" className="input input-bordered w-full max-w-md" />

                        {/* <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select> */}

                        <input type="submit" value="Submit" className="btn w-full max-w-md" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;