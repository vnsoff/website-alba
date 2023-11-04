// components/Services.js

import React from 'react';
import { DeliveryIcon, DriveThruIcon, ReservationIcon } from './IconComponent';
import 'styles/tailwind.css';

function Services() {
  return (
    <main>
    <div className='container grid grid-cols-1 my-20 mx-auto font-bold text-4xl'> 
        <h3 className='text-titleColor flex justify-center p-2'>
            SERVICES
        </h3>
    </div>
    <div className="container mt-20 my-20 mx-auto">
        <div className="grid grid-cols-3 gap-2 text-titleColor ">
            <div className="flex justify-center p-6">
                <DeliveryIcon/>
            </div>
            <div className="flex justify-center p-6">
                <DriveThruIcon/>
            </div>
            <div className="flex justify-center p-6">
                <ReservationIcon/>
            </div>
            <div className="flex justify-center px-10">
            <h3 className='text-2xl font-bold'>Delivery</h3>
            </div>
            <div className="flex justify-center px-10">
            <h3 className='text-2xl font-bold'>Drive-Thru</h3>
            </div>
            <div className="flex justify-center px-10">
            <h3 className='text-2xl font-bold'>Reservation</h3>
            </div>
            <div className="flex text-md text-descColor justify-center px-10">
            <p>Enjoy authentic flavors, delivered to your doorstep. Indulge in our carefully crafted dishes, expertly prepared with care. Experience the richness of Italian cuisine from the comfort of your home.</p>
            </div>
            <div className="flex text-md text-descColor justify-center px-10">
            <p>Italian feast on the go!<br></br> Experience the same authentic flavors of Ristorante Alba without leaving your car.</p>
            </div>
            <div className="flex text-md text-descColor justify-center px-10">
            <p>Reserve your table today for an unforgettable experience. Whether it's a romantic dinner or a gathering with loved ones, savor the finest Italian cuisine at Ristorante Alba.<br></br><br></br>
            Join us during our opening hours:<br></br>
            <strong>Tue/Fri:</strong> 18:30 - 23:30,<br></br>
            <strong>Sat:</strong> 12:00 - 23:30, <br></br>
            <strong>Sun:</strong> 12:00 - 16:00.
            </p>
            </div>
        </div>
    </div>
    </main>
  );
}

export default Services;
