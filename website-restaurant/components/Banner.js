import React from 'react';

function Banner() {
  return (
    <div className="bg-cover bg-center h-full w-full mx-auto flex justify-center items-center transform transition-transform hover:">
      <img
        src="/images/marketing/banner1.png"
        alt="Banner1"
        className="h-full w-full"
      />
    </div>
  );
}

export default Banner;
