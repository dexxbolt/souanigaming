
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-mustang-dark">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className="text-mustang-red font-bold text-7xl md:text-9xl mb-4">404</h1>
          <p className="text-white text-xl md:text-2xl font-medium mb-8">
            Oops! Page not found
          </p>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="btn-mustang inline-block font-bold px-8 py-3"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
