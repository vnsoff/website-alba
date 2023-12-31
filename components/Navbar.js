//Navbar.js

import React, { useState } from 'react';
import '@/public/styles/tailwind.css';
import { XIcon as XMarkIcon, MenuAlt3Icon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const navigateToSection = (path) => {
    if (path !== '/#') {
      router.push(path);
      const sectionId = path.substring(1);
      const section = document.getElementById(sectionId);
      console.log('Section:', section); // Add this line to check if the section is found

      if (section) {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setIsMobile(false);
    }
  };

  return (
      <nav className="lg:mx-0 lg:px-40 inset-x-0 flex flex-col lg:flex-row items-center justify-between p-6 z-40 bg-stone-900 sticky top-0">
        <div className="container mx-5 lg:mx-auto flex items-center justify-between w-full">
          <button onClick={() => navigateToSection('#page-top')} aria-label="Go to top">
            <Image src="/images/header/navbar-logo.png" alt="Logo" width={102} height={102} />
          </button>
          <button
              className="text-white lg:hidden focus:outline-none"
              aria-label="Toggle navigation"
              onClick={handleMobileMenu}
          >
            {isMobile ? (
                <XMarkIcon className="w-7 h-7 text-white" />
            ) : (
                <MenuAlt3Icon className="w-7 h-7 text-white" />
            )}
          </button>
          <div className={`text-stone-200 lg:flex lg:items-center lg:w-auto ${isMobile ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
              <li>
                <button className="nav-link transform transition-transform hover:scale-105" onClick={() => navigateToSection('#services')}>
                  SERVICES
                </button>
              </li>
              <li>
                <button className="nav-link transform transition-transform hover:scale-105" onClick={() => navigateToSection('#options')}>
                  LA NOSTRA CUCINA
                </button>
              </li>
              <li>
                <button className="nav-link transform transition-transform hover:scale-105" onClick={() => navigateToSection('#timeline')}>
                  OUR LEGACY
                </button>
              </li>
              <li>
                <button className="nav-link transform transition-transform hover:scale-105" onClick={() => navigateToSection('#meet-the-monti')}>
                  MEET THE MONTI
                </button>
              </li>
              <li>
                <button className="nav-link transform transition-transform hover:scale-105" onClick={() => navigateToSection('#reservation')}>
                  RESERVATIONS
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
