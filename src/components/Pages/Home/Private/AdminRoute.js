import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
   const { isLoading, user, admin } = useAuth()
   if (isLoading) {
      return <Spinner className="mt-5 fs-3" animation="border" variant="primary" />
   }

   return (
      <Route
         {...rest}
         render={({ location }) =>
            user?.email && admin ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: "/login",
                     state: { from: location }
                  }}
               />
            )
         }
      />
   );
};

export default PrivateRoute;