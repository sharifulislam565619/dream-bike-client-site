import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {


   const { register, handleSubmit, reset } = useForm();


   const onSubmit = data => {

      fetch(`https://fathomless-taiga-77170.herokuapp.com/admin/${data.emailAddress}`, {
         method: "PUT",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            if (result.acknowledged) {
               alert("Admin role successfully added")
               reset()
            }
         });
   };



   return (
      <div>
         <h2 className="mt-5 text-success">Make a new admin</h2>
         <form className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>
            <input required type="text" placeholder="Enter email"  {...register("emailAddress")} />
            <input type="submit" className="btn btn-primary" value="Add admin" />
         </form>
      </div>
   );
};

export default MakeAdmin;