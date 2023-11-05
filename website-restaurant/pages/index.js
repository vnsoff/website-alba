// pages/index.js

import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Options from '../components/Options';
import TeamPage from '../components/TeamPage';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Reservation from '../components/Reservation';
import Timeline from '../components/Timeline';

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
        <Timeline />
      </div>
      <div>
        <TeamPage />
      </div>
      <div>
        <Reservation />
      </div>      
      <div>
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
