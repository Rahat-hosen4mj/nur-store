import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login/Login';
import Footer from '../Shared/Footer';

import Categories from './Categories/Categories';
import Filter from './Filter/Filter';
import HomeBanner from './HomeBanner/HomeBanner';
import SingleProduct from './SingleProduct/SingleProduct';


const Home = () => {
    return (
       
      <div>
        <HomeBanner />
        <Categories />
        <Filter />
        <SingleProduct />
        <Footer />
      </div>
    );
};

export default Home;