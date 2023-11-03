import React, { useState } from 'react';
import 'styles/tailwind.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="relative">
      <div className="h-96 bg-cover bg-center" style={{ 
        backgroundImage: 'url("/images/header/header-bg.png")',
        height: '800px'
      }}>
        <nav className={`absolute lg:mx- lg:px-40 top-5 inset-x-0 flex items-center justify-between lg:p-6 ${isMobile ? 'bg-gray-800' : 'bg-gradient-to-b from-Stone-950'}`}>
          <div className="container mx-5 lg:mx-auto flex items-center justify-between">
            <a href="#page-top">
              <img src="/images/header/navbar-logo.png" alt="Logo" className="h-8" />
            </a>
            <button
              className="text-white lg:hidden focus:outline-none"
              aria-label="Toggle navigation"
              onClick={handleMobileMenu}
            >
              {isMobile ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
            <div className={`text-stone-200 lg:flex lg:items-center lg:w-auto ${isMobile ? 'hidden' : 'block'}`}>
              <a className="nav-link mr-5 lg:mr-10" href="#services">
                SERVICES
              </a>
              <a className="nav-link mr-5 lg:mr-10" href="#portfolio">
                LA NOSTRA CUCINA
              </a>
              <a className="nav-link mr-5 lg:mr-10" href="#portfolio">
                OUR LEGACY
              </a>
              <a className="nav-link mr-5 lg:mr-10" href="#portfolio">
                MEET THE MONTI
              </a>
              <a className="nav-link lg:mr-10" href="#portfolio">
                RESERVATIONS
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
