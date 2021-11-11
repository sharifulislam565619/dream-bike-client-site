import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../../images/404.png';

const NotFound = () => {
   return (
      <div className="my-4">
         <img className="w-25 my-5" src={error} alt="" /><br />
         <Link to="/home"><button className="btn btn-primary">Back Home</button></Link>
      </div>
   );
};

export default NotFound;