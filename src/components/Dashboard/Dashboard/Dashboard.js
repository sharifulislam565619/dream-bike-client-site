import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NotFound from '../../Pages/Home/NotFound/NotFound';
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
   const { logOut } = useAuth()

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

                  </Nav>
               </Navbar.Collapse>
            </>
         </Navbar>



         <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">


            </div>
            <div className="offcanvas-body ">
               <Nav className="justify-content-start flex-grow-1 pe-3">

                  <ul>
                     <li><Link to="/home">Back to Home</Link></li>
                     <li><Link to={`${url}/myOrders`}>MyOrders</Link></li>
                     <li> <Link to={`${url}/manageOllOrders`}>ManageAllOrders</Link></li>
                     <li><Link to={`${url}/addProduct`}>Add A Product</Link></li>
                     <li><Link to={`${url}/makeAdmin`}>Make admin</Link></li>
                     <li><Link to={`${url}/payment`}>Payment</Link></li>
                     <li><Link to={`${url}/review`}>Review</Link></li>
                     <li> <Link to={`${url}/manageProducts`}>ManageProducts</Link></li>
                  </ul>
                  <button onClick={logOut} className="btn my-button">LogOut</button>
               </Nav>



            </div>
         </div>
         <div className="main mt-5">
            <Switch>
               <Route exact path={path}>
                  <ManageAllOrder></ManageAllOrder>
               </Route>
               <Route exact path={`${path}/myOrders`}>
                  <MyOrders></MyOrders>
               </Route>
               <Route exact path={`${path}/manageOllOrders`}>
                  <ManageAllOrder></ManageAllOrder>
               </Route>
               <Route exact path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </Route>

               <Route path={`${path}/addProduct`}>
                  <AddProducts />
               </Route>
               <Route path={`${path}/payment`}>
                  <Payment />
               </Route>
               <Route path={`${path}/review`}>
                  <Review />
               </Route>
               <Route path={`${path}/manageProducts`}>
                  <ManageProducts />
               </Route>
               <Route exact path={path / "*"}>
                  <NotFound />
               </Route>
            </Switch>
         </div>
      </>
   );
};

export default Dashboard;