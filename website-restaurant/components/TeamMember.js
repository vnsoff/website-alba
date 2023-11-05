// TeamMember.js

import React from 'react';
import 'styles/tailwind.css';
import { TwitterIcon, FacebookIcon, LinkedInIcon } from './IconComponent'; // Import your icons here

const TeamMember = ({ name, role, imgSrc, twitterLink, facebookLink, linkedinLink }) => {
  return (
    <div className="col-lg-4 text-center mb-8">
      <div className="team-member">
        <img className="mx-auto rounded-full h-64 w-64 mb-4 border-8 border-slate-200" src={imgSrc} alt={name} />
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <div className="flex justify-center gap-x-2 mt-4">
          <TwitterIcon/>
          <FacebookIcon/>
          <LinkedInIcon/>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
