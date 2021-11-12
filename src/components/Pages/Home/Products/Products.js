import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Products = () => {
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
      <div >
         <Navigation />
         <div>
            <h2 className="text-success mt-3">All Products</h2>
            <hr className="w-25 mx-auto" />

            {
               isLoading && <Spinner className="fs-3 my-5" animation="border" variant="black" />
            }

            <div className="container pb-3">
               <Row className="g-4">
                  {
                     products?.map(product => <Product
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

export default Products;