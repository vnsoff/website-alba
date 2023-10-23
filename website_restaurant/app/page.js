import Image from 'next/image'
import React from 'react';
import Header from '../components/Header';
import Masthead from '../components/Masthead';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/globals.css'; // Import global.css from the root directory

export default function Home() {
  return (
    <div>
      <Header />
      <Masthead />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
