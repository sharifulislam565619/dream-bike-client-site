import { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';



const ManageAllOrders = () => {
   const [orders, setOrders] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [approved, setApproved] = useState(true)



   useEffect(() => {
      fetch("https://fathomless-taiga-77170.herokuapp.com/manageOrders")
         .then(res => res.json())
         .then(data => {
            setOrders(data)
            setIsLoading(false)
         })
   }, [approved])

   const handleOrders = (id) => {
      setApproved(true)
      const url = `https://fathomless-taiga-77170.herokuapp.com/status/${id}`
      const status = {
         status: "Shipped"
      }
      fetch(url, {
         method: 'PUT',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(status),
      })
         .then(res => res.json())
         .then(result => {
            if (result.modifiedCount > 0) {
               setApproved(false)
            }
         })
   }

   const handleDelete = (id) => {
      setApproved(true)
      const proceed = window.confirm("Are you sure delete this Order ??")
      if (proceed) {
         const url = `https://fathomless-taiga-77170.herokuapp.com/deleteOrder/${id}`


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
      <div className="my-table">
         <h2 className="mt-3 text-success ">Manage All Orders</h2>

         {
            isLoading && <Spinner className="fs-3" animation="border" variant="black" />
         }

         <Table responsive="sm md lg">
            <thead>
               <tr>
                  <th className="table-head">#</th>
                  <th>Name</th>
                  <th className="table-head">Email Address</th>
                  <th className="table-head">Phone</th>
                  <th className="table-head">Address</th>
                  <th className="table-head">Product name</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Action Orders</th>
               </tr>
            </thead>
            {
               orders.map((order, index) => <tbody
                  key={order?._id}
               >
                  <tr>
                     <td className="table-body">{index + 1}</td>
                     <td>{order?.name}</td>
                     <td className="table-body">{order?.emailAddress}</td>
                     <td className="table-body">{order?.phone}</td>
                     <td className="table-body">{order?.address}</td>
                     <td className="table-body">{order?.orderName}</td>
                     <td><small className={order?.status === "Shipped" ? "text-primary" : "text-dark"}>{order?.status}</small></td>
                     <td>
                        <button onClick={() => handleOrders(order?._id)} className={order?.status === "Shipped" ? "btn btn-primary text-white" : "btn btn-outline-dark"}>Confirm</button>

                        <button onClick={() => handleDelete(order?._id)} className="btn btn-danger m-2">Delete</button>
                     </td>
                  </tr>

               </tbody>)
            }
         </Table>

      </div>
   );
};

export default ManageAllOrders;