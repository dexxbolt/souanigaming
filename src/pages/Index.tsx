
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Banner from '../components/Banner';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <Brands />
      <Footer />
    </div>
  );
};

export default Index;
