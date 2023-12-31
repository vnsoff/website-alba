// components/Privacy.js

import React from 'react';
import '../styles/tailwind.css';

function PrivacyPolicy() {
  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Privacy Policy</h1>
      <div className="h-96 overflow-y-scroll">
        <p>
          {/* Your privacy policy text goes here */}
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
