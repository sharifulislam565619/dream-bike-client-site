import React from 'react';
import './Contact.css';

const Contact = () => {
   return (
      <div id="contact" className="pb-3 pt-3" >
         <h2 className="pt-4 text-success">Contact us</h2>
         <hr />
         <form action="" >
            <input className="" type="text" name="" placeholder="Enter your name" id="" /><br />
            <input className="" type="email" name="" id="" placeholder="Enter your Email" />
            <br />
            <input className="" type="number" placeholder="Enter Your Phone" name="" id="" />
            <br />
            <textarea className="" name="" id="" placeholder="Message" cols="30" rows="5"></textarea>
            <br />
            <button className="btn my-button text-start">Submit</button>
         </form>

      </div>
   );
};

export default Contact;