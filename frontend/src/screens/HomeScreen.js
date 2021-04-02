import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  /*const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;*/

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
      <div className="headerhome">
      <div className="container-head">
      <div className="rowhead">
      <div className="nilgiris">
            <h2 className="titlehead">"Feel the tempting and delectable taste of the Nilgiris!"</h2>
            <div className="nilgiris">
            <img src='../images/first.png' alt="headpic"/>
            <img src='../images/T2.jpg' alt="headpic"/>
            <img src='../images/T3.jpg' alt="headpic"/>
            </div>
            <Link to="/productlist" className="btntop">Sign in and Explore &#8594;</Link>
        </div>
        </div>
        </div>
        </div>
      <h2 className="title">Our Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
    <div id="about" class="testimonials">
    <div class="small-container">
        <div class="row">
            <div class="col-1">
                <h2 class="title"> ABOUT GERIVI</h2>
                <i class="fa fa-quote-left"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, perspiciatis natus. 
                    Veniam, doloremque quaerat natus ipsa iusto quae excepturi perspiciatis exercitationem! 
                    Eos id consequatur velit autem minus pariatur, architecto recusandae?</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <img src='../images/first.png' alt="chocot"/>
                    <h2>GEETHU VIVEK</h2>
                    <p className="paract">CEO, GERIVI</p>
            </div>
        </div>
    </div>
</div>
        </>
      )}
    </div>
  );
}
