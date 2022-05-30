import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import pp from '../../assets/images/pp.png';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='lg:px-12'>
            <h2 className='text-2xl font-semibold my-5'>My Profile</h2>
            <div className=''>
                <img className="mask mask-circle" src={user?.photoURL || pp} alt='User' />
                <h2 className='text-3xl font-bold text-purple-600'>{user.displayName}</h2>
                <p className='text-orange-700 font-medium'>Email: {user.email}</p>
            </div>
            <div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body flex">
                        <div>
                            <h2 className="card-title">Personal Informations</h2>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Educational Information</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Job Description</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <button className="btn w-full mt-2 max-w-xs">Update</button>
                        </div>
                        <div>
                            <h2>This is side bar</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;