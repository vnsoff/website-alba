// pages/index.js

import Navbar from '../components/Navbar';
import Services from '../components/Services';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
}
