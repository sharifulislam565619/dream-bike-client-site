import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Home/Login/Login';
import NotFound from './components/Pages/Home/NotFound/NotFound';
import Order from './components/Pages/Home/Order/Order';
import PrivateRoute from './components/Pages/Home/Private/PrivateRoute';
import Products from './components/Pages/Home/Products/Products';
import Register from './components/Pages/Home/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/product">
              <Products></Products>
            </Route>
            <PrivateRoute path="/order/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
