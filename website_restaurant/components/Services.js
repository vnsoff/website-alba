import React from 'react';

function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
        </div>
        <br />
        <br />
        <br />
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-motorcycle fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Delivery</h4>
            <p className="text-muted left-align">
              Enjoy authentic flavors, delivered to your doorstep. Indulge in our carefully crafted dishes, expertly prepared with care. Experience the richness of Italian cuisine from the comfort of your home.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-car fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Drive-Thru</h4>
            <p className="text-muted left-align">
              Italian feast on the go! Experience the same authentic flavors of Ristorante Alba without leaving your car.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-cutlery fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Reservation</h4>
            <p className="text-muted left-align">
              Reserve your table today for an unforgettable experience. Whether it's a romantic dinner or a gathering with loved ones, savor the finest Italian cuisine at Ristorante Alba.
              <br />
              <br />
              Join us during our opening hours:
              <br />
              Tue/Fri: 18:30 - 23:30,
              <br />
              Sat: 12:00 - 23:30,
              <br />
              Sun: 12:00 - 16:00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
