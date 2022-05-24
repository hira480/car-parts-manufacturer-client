import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (
        <div>
            <div className='lg:px-24'>
                <div class="card mt-10 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                        <p>If we want to increase the performance of a react app at first we have to know where and when we can optimize it. We have to create components that’s why we can specifically find out every parts of code. Also we have to avoid props drilling to increase the performance. We have to memorize React components to prevent unnecessary re-renders. </p>
                    </div>
                </div>
                <div class="card my-10 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>Mainly there are four types of state to properly manage a react application. <br />
                            First of all Local state would be needed to show initial state of data and after change the state of data. ussState is the example of local state.
                            Global state is helps to manage data across multiple components. User state authentication is the a global state.
                            Server state is helps to integrate external data with UI state. We use fetch to load external data. And URL state help us to use data that exist on our url.
                        </p>
                    </div>
                </div>
                <div class="card my-10 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">How does prototypical inheritance work?</h2>
                        <p>JavaScript is prototype based object oriented programming language. Prototypical Inheritance is a JavaScript feature that use to add properties and methods in object. It can provide the ability of an object can inherit the properties and methods of another object in order to get and set the prototype of an object.</p>
                    </div>
                </div>
                <div class="card mb-10 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;