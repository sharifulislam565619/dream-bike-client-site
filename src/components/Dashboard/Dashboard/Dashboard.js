import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import userPhoto from '../../../images/userPhoto.png';
import useAuth from '../../hooks/useAuth';
import NotFound from '../../Pages/Home/NotFound/NotFound';
import AdminRoute from '../../Pages/Home/Private/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css';
import ManageProducts from './MangeProducts/ManageProducts';



const Dashboard = () => {
   let { path, url } = useRouteMatch();
   const { logOut, admin, user } = useAuth()

   const history = useHistory()
   const uri = "/home"

   return (
      <>
         <Navbar className="py-0 navbar " fixed="top" bg="dark" collapseOnSelect expand="lg" variant="dark">
            <>
               <Navbar.Brand >

                  <button className="btn btn-light bg-dark toggle_btn ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                     <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample" ></span>
                  </button>
                  <h5 className="text ps-3">Dashboard</h5>

               </Navbar.Brand>
               <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ms-auto">
                     <small><img style={{ width: "40px", borderRadius: "50%", marginRight: "20px" }} src={user?.photoURL || userPhoto} alt="" /></small>
                  </Nav>
               </Navbar.Collapse>
            </>
         </Navbar>



         <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">


            </div>
            <div className="offcanvas-body ">
               <Nav className="justify-content-start flex-grow-1 pe-3 my-dashboard">

                  <ul className="p-0">
                     <li><i className="fas fa-home"></i> <Link to="/home">Home</Link></li>
                     {!admin && <div>
                        <li><i className="fas fa-align-justify"></i> <Link to={`${url}/myOrders`}>MyOrders</Link></li>
                        <li><i className="fas fa-pen-square"></i> <Link to={`${url}/review`}>Add a Review</Link></li>
                        <li><i className="far fa-credit-card"></i><Link to={`${url}/payment`}>Payment</Link></li>
                     </div>}
                     {admin && <div>
                        <li><i className="fas fa-align-justify"></i> <Link to={`${url}/manageOllOrders`}>ManageAllOrders</Link></li>
                        <li><i className="fas fa-plus-circle"></i> <Link to={`${url}/addProduct`}>Add A Product</Link></li>
                        <li><i className="fas fa-user-shield"></i> <Link to={`${url}/makeAdmin`}>Make admin</Link></li>
                        <li><i className="fas fa-luggage-cart"></i> <Link to={`${url}/manageProducts`}>ManageProducts</Link></li>
                     </div>}
                  </ul>
                  <button onClick={() => logOut(history, uri)} className="btn my-button"><i className="fas fa-sign-out-alt"></i> Sign out</button>
               </Nav>



            </div>
         </div>
         <div className="main mt-5">
            <Switch>
               {admin ? <Route exact path={path}>
                  <ManageAllOrder></ManageAllOrder>
               </Route> : <Route exact path={path}>
                  <MyOrders></MyOrders>
               </Route>

               }
               <Route exact path={`${path}/myOrders`}>
                  <MyOrders></MyOrders>
               </Route>
               <AdminRoute exact path={`${path}/manageOllOrders`}>
                  <ManageAllOrder></ManageAllOrder>
               </AdminRoute>
               <AdminRoute exact path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </AdminRoute>

               <AdminRoute path={`${path}/addProduct`}>
                  <AddProducts />
               </AdminRoute>
               <Route path={`${path}/payment`}>
                  <Payment />
               </Route>
               <Route path={`${path}/review`}>
                  <Review />
               </Route>
               <AdminRoute path={`${path}/manageProducts`}>
                  <ManageProducts />
               </AdminRoute>
               <Route exact path={path / "*"}>
                  <NotFound />
               </Route>
            </Switch>
         </div>
      </>
   );
};

export default Dashboard;