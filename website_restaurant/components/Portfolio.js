import React from 'react';

function Portfolio() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">La Nostra Cucina</h2>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 1 */}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-cutlery fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/food/1.png" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Traditional</div>
                <div className="portfolio-caption-subheading text-muted">
                  Savor the authentic flavors of Italy with our Traditional creations, where cherished family recipes are served with love and devotion to culinary heritage.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 2 */}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-cutlery fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/food/2.png" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Modern Italian</div>
                <div className="portfolio-caption-subheading text-muted">
                  A contemporary twist on classic Italian dishes, blending traditional flavors with innovative cooking techniques and presentation.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 3 */}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-cutlery fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/food/3.png" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Regional Delights</div>
                <div className="portfolio-caption-subheading text-muted">
                  Highlighting the diverse culinary traditions of different Italian regions, featuring specialties from Tuscany, Sicily, Naples, and more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
