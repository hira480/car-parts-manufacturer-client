import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handelReview = event => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const review = event.target.review.value;
        const name = user.displayName;

        const newReview = {
            reviewText: review,
            name: name,
            rating
        }
        console.log(newReview);
        fetch('https://whispering-mountain-34563.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                    toast.success('Review Added Successfully');
                }
                else {
                    toast.error('Faild to add a Review');
                }
            })

    }
    return (
        <div className='lg:px-12'>
            <h2 className='text-2xl font-semibold my-5'>Give a feedback</h2>
            <div className="card max-w-md bg-base-100 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Review And Ratings</h2>
                    <form onSubmit={handelReview} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>

                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-md" />

                        <textarea type="text" name='review' maxLength='110' placeholder="Review" required className="textarea textarea-bordered w-full max-w-md" />

                        <select name='rating' className="select select-bordered w-full max-w-md" required>
                            <option disabled selected>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>

                        <input type="submit" value="Submit" className="btn w-full max-w-md" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;