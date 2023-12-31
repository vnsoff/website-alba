import React, { useState } from 'react';
import 'styles/tailwind.css';

const Reservation = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !message) {
      setError(true);
    } else {
      setError(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section id="reservation" className="page-section bg-slate-100 pb-20 pt-20">
      <div className="container mx-auto px-5">
        <div className='container grid grid-cols-1  mx-auto font-bold text-4xl'> 
        <h3 className='text-titleColor flex justify-center p-2 uppercase'>
        Reservations
        </h3>
        </div>
        <br></br>
        <br></br>
        <form id="contactForm" className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                className="w-full border border-gray-300 p-3 rounded-md mb-4 outline-none focus:border-primary"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name *"
                required
              />
            </div>

            <div>
              <input
                className="w-full border border-gray-300 p-3 rounded-md mb-4 outline-none focus-border-primary"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email *"
                required
              />
            </div>

            <div>
              <input
                className="w-full border border-gray-300 p-3 rounded-md mb-4 outline-none focus-border-primary"
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone *"
                required
              />
            </div>

            <div>
              <textarea
                className="w-full h-48 border border-gray-300 p-3 rounded-md outline-none focus-border-primary"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message *"
                required
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-10">
          <button className="btn btn-primary disabled bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400 py-3 px-6 rounded-md text-white font-semibold" id="submitButton" type="submit">
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          {formSubmitted && !error && (
            <div id="submitSuccessMessage">
              <p className="font-bold text-green-500">Form submission successful!</p>
            </div>
          )}
          {error && (
            <div id="submitErrorMessage">
              <p className="text-danger text-red-500">Error sending message! Please fill out all fields.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
