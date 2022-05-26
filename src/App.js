import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/Login/ResetPassword';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddItems from './Pages/Dashboard/AddItems';
import AddReview from './Pages/Dashboard/AddReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageParts from './Pages/Dashboard/ManageParts';
import Payment from './Pages/Dashboard/Payment';
import MyProfile from './Pages/Dashboard/MyProfile';
import PurchasePage from './Pages/Purchase/PurchasePage';
import MyPortfolio from './Pages/Portfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/resetpass' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/parchaseItem/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
            {/* <PurchasePage></PurchasePage> */}
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addItems' element={<RequireAdmin><AddItems></AddItems></RequireAdmin>}></Route>
          <Route path='manageParts' element={<RequireAdmin><ManageParts></ManageParts></RequireAdmin>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
