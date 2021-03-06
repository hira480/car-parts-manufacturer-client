import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (
        <div>
            <div className='lg:px-24'>
                <div className="card mt-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                        <p>If we want to increase the performance of a react app at first we have to know where and when we can optimize it. We have to create components that’s why we can specifically find out every parts of code. Also we have to avoid props drilling to increase the performance. We have to memorize React components to prevent unnecessary re-renders. </p>
                    </div>
                </div>
                <div className="card my-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>Mainly there are four types of state to properly manage a react application. <br />
                            First of all Local state would be needed to show initial state of data and after change the state of data. ussState is the example of local state.
                            Global state is helps to manage data across multiple components. User state authentication is the a global state.
                            Server state is helps to integrate external data with UI state. We use fetch to load external data. And URL state help us to use data that exist on our url.
                        </p>
                    </div>
                </div>
                <div className="card my-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>JavaScript is prototype based object oriented programming language. Prototypical Inheritance is a JavaScript feature that use to add properties and methods in object. It can provide the ability of an object can inherit the properties and methods of another object in order to get and set the prototype of an object.</p>
                    </div>
                </div>
                <div className="card mb-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"> What is a unit test? Why should write unit tests?</h2>
                        <p>Unit test are automated test written and run by software developers. basically unit testing is the measurement of the performence of a website. How data loded, dependency, performence and so many things are included to unit testing. Depend on unit tasting result developers optimize the perforence of a website. Unit test is so important to analyse the performence. </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;