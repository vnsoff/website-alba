import React from 'react';
import 'styles/tailwind.css';

function ImageDescription({ imagePath, heading, description }) {
  return (
    <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
      <div className="object-scale-down h-96 w-96 bg-cover bg-center relative shadow-md">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imagePath})` }}></div>
      </div>
      <div className="bg-white w-96 px-4 py-4 shadow-md ">
        <h3 className="text-2xl font-bold text-titleColor">{heading}</h3>
        <p className="text-md text-descColor">{description}</p>
      </div>
    </div>
  );
}
  
function Options() {
  const imageDescriptions = [
    {
        imagePath: '/images/food/1.png',
        heading: 'Traditional',
        description: `Savor the authentic flavors of Italy with our Traditional creations, where cherished family recipes are served with love and devotion to culinary heritage.`,
    },
    {
        imagePath: '/images/food/2.png',
        heading: 'Modern Italian',
        description: `A contemporary twist on classic Italian dishes, blending traditional flavors with innovative cooking techniques and presentation.`,
    },
    {
        imagePath: '/images/food/3.png',
        heading: 'Regional Delights',
        description: `Highlighting the diverse culinary traditions of different Italian regions, featuring specialties from Tuscany, Sicily, Naples, and more.`,
    },
    {
        imagePath: '/images/food/4.png',
        heading: 'Wine Pairings',
        description: `Elevate your dining experience with our carefully crafted pasta dishes, expertly matched with a curated selection of fine wines, creating a harmonious symphony of flavors.`,
    },
    {
        imagePath: '/images/food/5.png',
        heading: "Chef's Specials",
        description: `A rotating selection of signature dishes crafted by the head chef, offering unique and delightful surprises for adventurous diners.`,
    },
    {
        imagePath: '/images/food/6.png',
        heading: 'Handcrafted Pasta',
        description: `Celebrating the art of pasta-making with an array of freshly made pasta dishes, each infused with distinctive flavors.`,
    },
  ];

  return (
    <main className='bg-slate-100 mt-6 py-20'>
      <div className='mx-20 mt-6 text-titleColor text-4xl mb-20'>
        <h3 className='uppercase text-titleColor flex justify-center p-2 font-bold mt-6'>
          La Nostra Cucina
        </h3>
      </div>
      <div className="mx-64 grid grid-cols-3 gap-x-4 gap-y-20">
        {imageDescriptions.map((item, index) => (
          <ImageDescription
            key={index}
            imagePath={item.imagePath}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
      <div className="mt-6"></div>
    </main>
  );
}

export default Options;