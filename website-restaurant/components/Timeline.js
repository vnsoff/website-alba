import React from 'react';

function Timeline() {
  return (
    <section className="page-section mt-8" id="about">
      <div>
        <div className='grid grid-cols-1 my-20 mx-auto font-bold text-4xl'> 
          <h3 className='text-titleColor flex justify-center p-2 uppercase'>
            Our Legacy
          </h3>
        </div>
        <ul className="timeline relative justify-center">
          <li className="mb-10 flex flex-row items-center justify-between">
            <div className="w-2/4 text-right p-5">
              <div className="timeline-image">
                <img className="rounded-full mx-auto border-8 border-slate-200 w-48" src="images/about/2.png" alt="..." />
              </div>
            </div>
            <div className="w-2/4">
              <div className="timeline-panel justify-center">
                <div className="timeline-heading mb-5">
                  <h2 className="text-2xl font-bold">1986-2011</h2>
                  <br></br>
                  <h2 className="text-2xl font-bold uppercase text-titleColor">Inception of a Culinary Legacy</h2>
                </div>
                <div className="timeline-body text-left">
                  <p className="text-base text-descColor">
                    The Monti family restaurant embarked on its journey in 1986, with humble beginnings that would soon blossom into an extraordinary culinary legacy. Rooted in a passion for authentic Italian cuisine, the Monti family started their venture with a dream to share the flavors of their heritage with the world.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-10 flex flex-row items-center justify-between">
            <div className="w-2/4 text-right p-5">
              <div className="timeline-image">
                <img className="rounded-full mx-auto border-8 border-slate-200 w-48" src="images/about/1.png" alt="..." />
              </div>
            </div>
            <div className="w-2/4">
              <div className="timeline-panel justify-center">
                <div className="timeline-heading mb-5">
                  <h2 className="text-2xl font-bold">March 2011</h2>
                  <br></br>
                  <h2 className="text-2xl font-bold uppercase text-titleColor">Culinary Haven is Born</h2>
                </div>
                <div className="timeline-body text-left">
                  <p className="text-base text-descColor">
                  With unwavering dedication and an unwavering commitment to excellence, the Monti family's restaurant flourished. A haven for food enthusiasts seeking the essence of Italy's culinary wonders, the restaurant's warm ambiance and delectable offerings earned them a place in the hearts of their patrons.
                  </p>
                </div>
              </div>
            </div>
          </li>
          
          <li className="mb-10 flex flex-row items-center justify-between">
            <div className="w-2/4 text-right p-5">
              <div className="timeline-image">
                <img className="rounded-full mx-auto border-8 border-slate-200 w-48" src="images/about/3.png" alt="..." />
              </div>
            </div>
            <div className="w-2/4">
              <div className="timeline-panel justify-center">
                <div className="timeline-heading mb-5">
                  <h2 className="text-2xl font-bold">December 2020</h2>
                  <br></br>
                  <h2 className="text-2xl font-bold uppercase text-titleColor">Elevating the Dining Experience</h2>
                </div>
                <div className="timeline-body text-left">
                  <p className="text-base text-descColor">
                  Driven by their culinary expertise and a genuine love for their craft, the Monti family transitioned their restaurant to a full-service establishment. Offering an enchanting dining experience, they delighted guests with an exquisite blend of traditional and innovative dishes, capturing the essence of Italy's diverse flavors.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-10 flex flex-row items-center justify-between">
            <div className="w-2/4 text-right p-5">
              <div className="timeline-image">
                <img className="rounded-full mx-auto border-8 border-slate-200 w-48" src="images/about/4.png" alt="..." />
              </div>
            </div>
            <div className="w-2/4">
              <div className="timeline-panel justify-center">
                <div className="timeline-heading mb-5">
                  <h2 className="text-2xl font-bold">July 2023</h2>
                  <br></br>
                  <h2 className="text-2xl font-bold uppercase text-titleColor">A Vision Expands</h2>
                </div>
                <div className="timeline-body text-left">
                  <p className="text-base text-descColor">
                  As their popularity soared, the Monti family restaurant embarked on a momentous phase two expansion. Embracing growth and innovation, they continued to serve delectable creations, creating cherished memories for all who stepped through their doors.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
