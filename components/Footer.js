// components/Footer.js

import React from 'react';
import Link from 'next/link';
import { TelegramIcon, FacebookIcon, LinkedInIcon } from './IconComponent';
import '@/public/styles/tailwind.css';

function Footer() {
  return (
      <footer>
        <div className='flex items-center gap-x-5 text-descColor justify-between py-6 mx-auto max-w-screen-xl'>
          <div>
            <h3>Copyright © Ristorante Alba</h3>
          </div>
          <div className='flex items-center  text-descColor justify-between py-6 mx-auto max-w-screen-xl gap-x-5'>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <div className='flex items-center  text-descColor justify-between py-6 mx-auto max-w-screen-xl gap-x-5'>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
