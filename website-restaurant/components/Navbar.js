import React, { useState, useRef, useEffect } from 'react';
import 'styles/tailwind.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef();

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/header/header-bg.png")',
          height: '800px',
        }}
      >
        <nav
          className={`lg:mx-40 lg:px-40 top-5 inset-x-0 flex items-center justify-between p-6 ${
            isMobile ? 'bg-gray-800' : 'bg-gradient-to-b from-Stone-950'
          }`}
        >
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
                <span className="text-white">&#x2715;</span>
              ) : (
                <span className="text-white">&#9776;</span>
              )}
            </button>
          </div>
        </nav>
        <div
          ref={menuRef}
          className={`lg:hidden fixed inset-y-0 right-0 z-10 w-3/4 bg-gray-800 transform ${
            isMobile ? 'translate-x-0' : 'translate-x-full'
          } transition duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-screen justify-center items-start space-y-8 p-8">
            <a className="text-white text-2xl" href="#services">
              SERVICES
            </a>
            <a className="text-white text-2xl" href="#portfolio">
              LA NOSTRA CUCINA
            </a>
            <a className="text-white text-2xl" href="#portfolio">
              OUR LEGACY
            </a>
            <a className="text-white text-2xl" href="#portfolio">
              MEET THE MONTI
            </a>
            <a className="text-white text-2xl" href="#portfolio">
              RESERVATIONS
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center h-full lg:pl-20 lg:pr-20">
          <div className="text-center">
            <h2 className="text-4xl italic text-white">Discover Italy at Ristorante Alba</h2>
            <br></br>
            <br></br>
            <h2 className="text-7xl font-bold drop-shadow-md text-white uppercase">
              BENVENUTI ALLA NOSTRA CASA
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
