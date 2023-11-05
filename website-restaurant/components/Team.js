import React from 'react';
import TeamMember from './TeamMember';
import 'styles/tailwind.css';
import { TwitterIcon, FacebookIcon, LinkedInIcon } from './IconComponent';

const Team = ({ teamData }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className='container grid grid-cols-1 my-8 sm:my-20 font-bold text-4xl uppercase'> 
          <h3 className='text-titleColor flex justify-center p-2'>
            Meet the Monti
          </h3>
        </div>
        <div className="flex text-base text-descColor justify-center sm:px-10 text-center">
          <p>
            The Monti family, an iconic Italian lineage with a rich culinary heritage, has been synonymous with the art of gastronomy for generations. Rooted in tradition and bound by a profound passion for fine cuisine, the Monti family has left an indelible mark on the world of Italian gastronomy. At the heart of their culinary journey lies a deep respect for authentic flavors and time-honored recipes, passed down through the ages, and meticulously preserved to this day.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:justify-center">
        {teamData.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            imgSrc={member.imgSrc}
            twitterLink={member.twitterLink}
            facebookLink={member.facebookLink}
            linkedinLink={member.linkedinLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
