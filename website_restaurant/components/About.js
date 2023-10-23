import React from 'react';

function About() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Legacy</h2>
        </div>
        <br />
        <br />
        <br />
        <ul className="timeline">
          <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.png" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>1986-2011</h4>
                <h4 className="subheading left-align">Inception of a Culinary Legacy</h4>
              </div>
              <div className="timeline-body"><p className="text-muted left-align">
                The Monti family restaurant embarked on its journey in 1986, with humble beginnings that would soon blossom into an extraordinary culinary legacy. Rooted in a passion for authentic Italian cuisine, the Monti family started their venture with a dream to share the flavors of their heritage with the world.
              </p></div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.png" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2011</h4>
                <h4 className="subheading left-align">A Culinary Haven is Born</h4>
              </div>
              <div className="timeline-body"><p className="text-muted left-align">
                With unwavering dedication and an unwavering commitment to excellence, the Monti family's restaurant flourished. A haven for food enthusiasts seeking the essence of Italy's culinary wonders, the restaurant's warm ambiance and delectable offerings earned them a place in the hearts of their patrons.
              </p></div>
            </div>
          </li>
          <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.png" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>December 2020</h4>
                <h4 className="subheading left-align">Elevating the Dining Experience</h4>
              </div>
              <div className="timeline-body"><p className="text-muted left-align">
                Driven by their culinary expertise and a genuine love for their craft, the Monti family transitioned their restaurant to a full-service establishment. Offering an enchanting dining experience, they delighted guests with an exquisite blend of traditional and innovative dishes, capturing the essence of Italy's diverse flavors.
              </p></div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.png" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>July 2023</h4>
                <h4 className="subheading left-align">A Vision Expands</h4>
              </div>
              <div className="timeline-body"><p className="text-muted left-align">
                As their popularity soared, the Monti family restaurant embarked on a momentous phase two expansion. Embracing growth and innovation, they continued to serve delectable creations, creating cherished memories for all who stepped through their doors.
              </p></div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;