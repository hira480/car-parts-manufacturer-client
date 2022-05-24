import React from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    if (sending) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        sendPasswordResetEmail(data.email);
        toast('Send Password Reset Email');
        navigate('/login');

    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Reset Password</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Enter your email here</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs "
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email'
                                }
                            })}
                        />
                        <label className='label'>
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                        <input className='btn w-full max-w-xs' type="submit" value='Send' />
                    </form>
                    <p className='text-center text-sm'>Want to Login? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;