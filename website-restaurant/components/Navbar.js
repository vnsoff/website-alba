// components/Navbar.js

import React, { useState } from 'react';
import 'styles/tailwind.css';
import { XIcon as XMarkIcon, MenuAlt3Icon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const navigateToSection = (path) => {
    router.push(path);
    setIsMobile(false); // Close mobile menu after navigation
  };

  return (
    <div className="relative">
      <div className="h-96 bg-cover bg-center" style={{ 
        backgroundImage: 'url("/images/header/header-bg.png")',
        minHeight: '800px'
      }}>
        <nav className={`lg:mx-40 lg:px-40 top-5 inset-x-0 flex items-center justify-between p-6 ${isMobile ? 'bg-gray-800' : 'bg-gradient-to-b from-Stone-950'}`}>
          <div className="container mx-5 lg:mx-auto flex items-center justify-between">
            <div className="flex items-center">
              {!isMobile && (
                <button onClick={() => navigateToSection('#page-top')} aria-label="Go to top">
                  <img src="/images/header/navbar-logo.png" alt="Logo" className="h-8" />
                </button>
              )}
              {isMobile ? <br /> : null}
            </div>
            <button
              className="text-white lg:hidden focus:outline-none"
              aria-label="Toggle navigation"
              onClick={handleMobileMenu}
            >
              {isMobile ? (
                <XMarkIcon className="w-7 h-7 text-white" />
              ) : (
                <MenuAlt3Icon className="w-7 h-7 text-white"/>
              )}
            </button>
            <div className={`text-stone-200 lg:flex lg:items-center lg:w-auto ${isMobile ? 'block' : 'hidden'}`}>
              <ul>
                <li>
                  <button className="nav-link mr-5 lg:mr-10 transform transition-transform hover:scale-105" onClick={() => navigateToSection('/services')}>
                    SERVICES
                  </button>
                </li>
                <li>
                  <button className="nav-link mr-5 lg:mr-10 transform transition-transform hover:scale-105" onClick={() => navigateToSection('/our-cucina')}>
                    LA NOSTRA CUCINA
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center h-full lg:pl-20 lg:pr-20">
          <div className="text-center">
            <h2 className="text-4xl italic text-white">Discover Italy at Ristorante Alba</h2>
            <br></br>
            <h2 className="text-7xl font-bold drop-shadow-md text-white uppercase">BENVENUTI ALLA NOSTRA CASA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
