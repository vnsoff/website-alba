//components/Banner2.js

import React from 'react';

const Banner2 = () => {
  return (
      <div className="h-96 bg-cover bg-center" style={{
        backgroundImage: `url(${require('./images/header/header-bg.png')})`,
        minHeight: '800px'
      }}>
        <div className="flex items-center justify-center h-full lg:pl-20 lg:pr-20">
          <div className="text-center">
            <h2 className="text-3xl italic text-white">Discover Italy at Ristorante Alba</h2>
            <br></br>
            <h2 className="text-6xl font-bold drop-shadow-md text-white uppercase">BENVENUTI ALLA NOSTRA CASA</h2>
          </div>
        </div>
      </div>
  );
};

export default Banner2;
