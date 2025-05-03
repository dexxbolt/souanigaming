
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyShopWithUs from '../components/WhyShopWithUs';
import FeaturedProducts from '../components/FeaturedProducts';
import Banner from '../components/Banner';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import QuickCategories from '../components/QuickCategories';
import CTABlock from '../components/CTABlock';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import NewArrivals from '../components/NewArrivals';
import SpecialOffers from '../components/SpecialOffers';
import ProductComparison from '../components/ProductComparison';

const Index = () => {
  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      <Hero />
      <QuickCategories />
      <WhyShopWithUs />
      <FeaturedProducts />
      <NewArrivals />
      <ProductComparison />
      <Banner />
      <SpecialOffers />
      <CTABlock />
      <Brands />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
