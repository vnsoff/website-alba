// components/TeamPage.js

import '@/public/styles/tailwind.css';
import React from 'react';
import Team from './Team';
import teamData from './teamData'; 

function TeamPage() {
  return (
    <main id="about">
      <div className='flex justify-center pb-10'>
        <Team teamData={teamData}/>
      </div>
    </main>
  );
}

export default TeamPage;
