import { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';



const ManageAllOrders = () => {
   const [orders, setOrders] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [approved, setApproved] = useState(true)



   useEffect(() => {
      fetch("http://localhost:5000/manageOrders")
         .then(res => res.json())
         .then(data => {
            setOrders(data)
            setIsLoading(false)
         })
   }, [approved])

   const handleOrders = (id) => {
      setApproved(true)
      const url = `http://localhost:5000/status/${id}`
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
      const proceed = window.confirm("Are you sure delete this booking ??")
      if (proceed) {
         const url = `http://localhost:5000/delete/${id}`


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

         <Table responsive="sm md">
            <thead>
               <tr>
                  <th className="table-head">#</th>
                  <th>Name</th>
                  <th className="table-head">Email Address</th>
                  <th className="table-head">Phone</th>
                  <th>Order id</th>
                  <th>Status</th>
                  <th>Action/Orders</th>
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
                     <td className="table-body">{order?.order_id}</td>

                     <td><p className={order?.status === "approved" ? "text-primary" : "text-dark"}>{order?.status}</p></td>
                     <td>
                        <button onClick={() => handleOrders(order?._id)} className={order?.status === "approved" ? "btn btn-outline-dark text-primary" : "btn btn-primary"}>Confirm</button>

                        <button onClick={() => handleDelete(order?._id)} className="btn btn-danger ms-2">Delete</button>
                     </td>
                  </tr>

               </tbody>)
            }
         </Table>

      </div>
   );
};

export default ManageAllOrders;