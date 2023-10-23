import React from 'react';

function Team() {
  return (
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Meet the Monti</h2>
                <h3 class="section-subheading text-muted">
                    The Monti family, an iconic Italian lineage with a rich culinary heritage, has been synonymous with the art of gastronomy for generations. Rooted in tradition and bound by a profound passion for fine cuisine, the Monti family has left an indelible mark on the world of Italian gastronomy. At the heart of their culinary journey lies a deep respect for authentic flavors and time-honored recipes, passed down through the ages, and meticulously preserved to this day.
                </h3>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets\img\team\1.webp" alt="..." />
                        <h4>Antonio Monti</h4>
                        <p class="text-muted">Pasta Chef</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets\img\team\2.webp" alt="..." />
                        <h4>Lorenzo Monti</h4>
                        <p class="text-muted">Sous Chef</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets\img\team\4.webp" alt="..." />
                        <h4>Giovanni Monti</h4>
                        <p class="text-muted">Head Chef</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets\img\team\3.webp" alt="..." />
                        <h4>Eleonora Monti</h4>
                        <p class="text-muted">Founding Chef Emeritus</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Marco Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>                
        </div>
    </section>
  );
}

export default Team;