import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProducts.css';

const AddProducts = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();


   const onSubmit = data => {
      fetch('http://localhost:5000/addProduct', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(result => {
            if (result.acknowledged) {
               alert("Wow The product is successfully added!!")
               reset()
            }
         })

   };



   return (
      <div>
         <h1>Add a new Product</h1>
         <form className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>

            <input required placeholder="product name" {...register("name")} />

            <input required placeholder="product price" type="number" {...register("price",)} />
            <input required placeholder="Image url/link" type="text" {...register("img",)} />

            <textarea
               {...register("description", { required: true })}
               placeholder="Description" />

            <input type="submit" className="btn btn-primary" value="Add new product" />

            <Link to="/home">	<button className="btn btn-outline-dark">back to home page</button></Link>
         </form>
      </div>
   );
};

export default AddProducts;