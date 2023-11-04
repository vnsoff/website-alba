// components/TeamPage.js

import 'styles/tailwind.css';
import React from 'react';
import Team from './Team';
import teamData from './teamData'; 

function TeamPage() {
  return (
    <div className='flex justify-center mb-10'>
    <Team teamData={teamData}/>
    </div>
  );
}

export default TeamPage;
