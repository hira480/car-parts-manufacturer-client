import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile lg:pl-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div style={{ backgroundColor: '#F6F7F9' }} className="drawer-content px-2">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/history'>My Profile</Link></li>

                    {!admin && <>
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add a Review</Link></li>
                        <li><Link to='/dashboard/addItems'>Add Item</Link></li>
                    </>}

                    {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                    {/* {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                    </>} */}
                </ul>

            </div>
        </div >
    );

};

export default Dashboard;