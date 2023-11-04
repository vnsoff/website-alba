// pages/index.js

import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Options from '../components/Options';
import TeamPage from '../components/TeamPage';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Options />
      </div>
      <div>
        <TeamPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
