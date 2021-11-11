import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';

const Home = () => {

   const [products, setProducts] = useState()
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetch("http://localhost:5000/products")
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
            <h2>Our Products</h2>

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
         <Footer></Footer>

      </div>
   );
};

export default Home;