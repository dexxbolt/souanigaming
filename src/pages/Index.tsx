
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyShopWithUs from '../components/WhyShopWithUs';
import FeaturedProducts from '../components/FeaturedProducts';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import QuickCategories from '../components/QuickCategories';
import CTABlock from '../components/CTABlock';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import NewArrivals from '../components/NewArrivals';
import SpecialOffers from '../components/SpecialOffers';

const Index = () => {
  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      <Hero />
      <QuickCategories />
      <WhyShopWithUs />
      <FeaturedProducts />
      <NewArrivals />
      <Banner />
      <SpecialOffers />
      <CTABlock />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
