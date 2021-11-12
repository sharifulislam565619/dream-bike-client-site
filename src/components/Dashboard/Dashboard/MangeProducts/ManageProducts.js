import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
const ManageProducts = () => {
   const [products, setProducts] = useState()
   const [isLoading, setIsLoading] = useState(true)
   const [approved, setApproved] = useState(true)


   useEffect(() => {
      fetch("http://localhost:5000/products")
         .then(res => res.json())
         .then(data => {
            setProducts(data)
            setIsLoading(false)
         })
   }, [approved])


   const handleDelete = (id) => {
      setApproved(true)
      const proceed = window.confirm("Are you sure delete this Product ??")
      if (proceed) {
         const url = `http://localhost:5000/deleteProduct/${id}`


         fetch(url, {
            method: 'DELETE',
            headers: {
               "content-type": "application/json"
            },
            body: JSON.stringify(),
         })
            .then(res => res.json())
            .then(result => {
               if (result.deletedCount > 0) {
                  setApproved(false)
               }
            })
      }
   }



   return (
      <div>
         <h2 className="text-success">Manage all Products</h2>
         {
            isLoading && <Spinner className="fs-3 my-5" animation="border" variant="black" />
         }

         <Table responsive="sm md">
            <thead>
               <tr>
                  <th className="table-head">#</th>
                  <th>Name</th>
                  <th className="table-head">Images</th>
                  <th className="table-head">Price</th>
                  <th className="table-head">Description</th>
                  <th className="table-head">Action</th>

               </tr>
            </thead>
            {
               products?.map((product, index) => <tbody
                  key={product?._id}
               >
                  <tr>
                     <td className="table-body">{index + 1}</td>
                     <td>{product?.name}</td>
                     <td className="table-body"><img style={{ width: "120px" }} src={product?.img} alt="" /></td>
                     <td>{product?.price}</td>
                     <td className="table-body">{product?.description.slice(0, 100)}</td>


                     <td>
                        <button onClick={() => handleDelete(product?._id)} className="btn btn-danger m-2">Delete</button>
                     </td>
                  </tr>

               </tbody>)
            }
         </Table>
      </div>
   );
};

export default ManageProducts;