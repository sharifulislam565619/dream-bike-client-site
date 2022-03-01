import React from 'react';
import './Contact.css';

const Contact = () => {
   return (
      <div id="contact" className="pb-3 pt-3 my-5" >
         <h2 className="pt-4 text-success">Contact us</h2>
         <hr />
         <form action="" >
            <input data-aos='fade-left' className="" type="text" name="" placeholder="Enter your name" id="" /><br />
            <input data-aos='fade-right' className="" type="email" name="" id="" placeholder="Enter your Email" />
            <br />
            <input data-aos='fade-left' className="" type="number" placeholder="Enter Your Phone" name="" id="" />
            <br />
            <textarea data-aos='fade-right' className="" name="" id="" placeholder="Message" cols="30" rows="5"></textarea>
            <br />
            <button data-aos='zoom-in' className="btn my-button text-start">Submit</button>
         </form>

      </div>
   );
};

export default Contact;