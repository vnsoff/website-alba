//components/TeamMember.js

import React from 'react';
import 'styles/tailwind.css';

const TeamMember = ({ name, role, imgSrc }) => {
  return (
    <div className="col-lg-4 text-center mb-8">
      <div className="team-member">
      <img className="mx-auto rounded-full h-64 w-64 mb-4 border-8 border-slate-200" src={imgSrc} alt={name} />
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <div className="flex justify-center mt-4">
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${name} Twitter Profile`}>
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${name} Facebook Profile`}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${name} LinkedIn Profile`}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
