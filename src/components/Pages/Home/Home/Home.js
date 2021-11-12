import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';

const Home = () => {

   const [products, setProducts] = useState()
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetch("https://fathomless-taiga-77170.herokuapp.com/products")
         .then(res => res.json())
         .then(data => {
            setProducts(data)
            setIsLoading(false)
         })
   }, [])
   return (
      <div>
         <Navigation></Navigation>
         <Banner></Banner>
         <div>
            <h2 className="text-success mt-4">Our Products</h2>
            <hr className="w-25 mx-auto mb-5" />

            {
               isLoading && <Spinner className="fs-3 my-5" animation="border" variant="black" />
            }

            <div className="container pb-3">
               <Row className="g-4">
                  {
                     products?.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                     ></Product>)
                  }
               </Row>
            </div>


         </div>
         <Reviews />
         <Contact />
         <Footer></Footer>

      </div>
   );
};

export default Home;