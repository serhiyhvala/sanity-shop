import React from 'react';
import product from "../sanity-shop/schemas/product";
import {Product, Footer, HeroBanner, Cart, FooterBanner, Navbar, Layout} from "../components";

const Home = () => {
    return (
        <>
            <HeroBanner/>
        <div className="products-heading">
          <h2>Best Selling Product</h2>
            <p>Speakers of many variatons</p>
        </div>
            <div className="products-container">
                {['Product1', 'Product2'].map((products) => products)}
            </div>
            <Footer />
        </>
    );
};

export default Home;