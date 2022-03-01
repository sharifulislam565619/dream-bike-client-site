import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
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
               setShow(true)
               reset()
            }
         });
   };



   return (
      <div className='my-5'>
         {
            show && <div>

               <Modal className="modal-open" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Dream bike says</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Admin role successfully added !!</Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Ok
                     </Button>
                  </Modal.Footer>
               </Modal>
            </div>
         }
         <h2 className="mt-5 text-success">Make a new admin</h2>
         <form className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>
            <input required type="text" placeholder="Enter email"  {...register("emailAddress")} />
            <input type="submit" className="btn my-button" value="Add admin" />
         </form>
      </div>
   );
};

export default MakeAdmin;