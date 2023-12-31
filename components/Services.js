// components/Services.js

import React from 'react';
import { DeliveryIcon, DriveThruIcon, ReservationIcon } from './IconComponent';
import 'styles/tailwind.css';

function Services() {
  return (
      <main id="services">
        <div className='container grid grid-cols-1 pt-20 mx-auto font-bold text-4xl'>
          <h3 className='text-titleColor flex justify-center p-2'>
            SERVICES
          </h3>
        </div>
        <div className="container mt-20 my-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-titleColor">
          <div className="flex flex-col items-center justify-center p-6 transform transition-transform hover:scale-115">
            <DeliveryIcon/>
            <h3 className='text-2xl font-bold mt-5'>Delivery</h3>
            <p className='text-md text-descColor mt-2 text-center'>
              Enjoy authentic flavors, delivered to your doorstep. Indulge in our carefully crafted dishes, expertly prepared with care. Experience the richness of Italian cuisine from the comfort of your home.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 transform transition-transform hover:scale-115">
            <DriveThruIcon/>
            <h3 className='text-2xl font-bold mt-5'>Drive-Thru</h3>
            <p className='text-md text-descColor mt-2 text-center'>
              Italian feast on the go! Experience the same authentic flavors of Ristorante Alba without leaving your car.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 transform transition-transform hover:scale-115">
            <ReservationIcon/>
            <h3 className='text-2xl font-bold mt-5'>Reservation</h3>
            <p className='text-md text-descColor mt-2 text-center'>
              Reserve your table today for an unforgettable experience. Whether it&apos;s a romantic dinner or a gathering with loved ones, savor the finest Italian cuisine at Ristorante Alba.
              Join us during our opening hours: Tue/Fri: 18:30 - 23:30, Sat: 12:00 - 23:30, Sun: 12:00 - 16:00.
            </p>
          </div>
        </div>
      </main>
  );
}

export default Services;
