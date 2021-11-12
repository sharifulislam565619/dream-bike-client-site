import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Review = () => {
   const { register, handleSubmit, reset } = useForm()
   const { user } = useAuth()
   const onSubmit = data => {
      data.photoURL = user?.photoURL;
      fetch("http://localhost:5000/review", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            if (result.acknowledged) {
               alert("Thank you review successfully added!!")
               reset()
            }
         });
   };

   return (
      <div >
         <h2 style={{ marginTop: "120px", color: "#0ba75f" }}>Please express your opinion</h2>


         <form className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>

            <input required placeholder="Your name" value={user?.displayName} {...register("name", { required: true })} />
            <input required type="text" placeholder="Your email" value={user?.email} {...register("email")} />
            <input required placeholder="Enter review rating 0-5" min="0" max="5" type="number" {...register("rating",)} />
            <textarea
               {...register("comment", { required: true })}
               placeholder="Comment" />
            <input type="submit" className="btn my-button" value="submit" />


         </form>
      </div>
   );
};

export default Review;