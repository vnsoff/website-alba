// TeamMember.js

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import 'styles/tailwind.css';
import { TwitterIcon, FacebookIcon, LinkedInIcon } from './IconComponent';

const TeamMember = ({ name, role, imgSrc, twitterLink, facebookLink, linkedinLink }) => {
    return (
        <main id="about">
            <div className="col-lg-4 text-center mb-8">
                <div className="team-member">
                    <Image
                        className="mx-auto rounded-full h-64 w-64 mb-4 border-8 border-slate-200"
                        src={imgSrc}
                        alt={name}
                        width={256} // Adjust width and height as per your design
                        height={256}
                    />
                    <h4 className="text-lg font-bold">{name}</h4>
                    <p className="text-sm text-gray-600">{role}</p>
                    <div className="flex justify-center gap-x-2 mt-4">
                        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TeamMember;
