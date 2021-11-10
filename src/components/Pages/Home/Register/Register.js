import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import './Register.css';





const Register = () => {
   const { registerWithEmailPassword, error } = useAuth()

   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const [name, setName] = useState()

   const history = useHistory()
   const location = useLocation()
   const url = location?.state?.from || '/home'




   const handleName = (e) => {
      setName(e.target.value)
   }

   const handleEmail = (e) => {
      setEmail(e.target.value)



   }
   const handlePassword = (e) => {
      setPassword(e.target.value)


   }

   const handleRegister = (e) => {
      e.preventDefault()
      registerWithEmailPassword(email, password, name, history, url)

   }

   return (
      <>
         <Navigation></Navigation>
         <div className="register-form py-4">

            <div className="my-cart fs-6">
               <h2>Please Register</h2>
               <p className="text-danger">{error}</p>


               <form onSubmit={handleRegister}>

                  <input onBlur={handleName} type="text" required placeholder="Enter Your Name" />
                  <br />
                  <input onBlur={handleEmail} type="email" required placeholder="Enter Your Email" />
                  <br />
                  <input onBlur={handlePassword} type="password" required placeholder="Enter Password" /><br />
                  <input className="register-btn" type="submit" value="Register" /><br />
               </form>
               <span>I have an account <Link to="/login">Login</Link></span><br />


            </div>
         </div>
      </>
   );
};

export default Register;