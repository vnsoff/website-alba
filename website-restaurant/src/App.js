import logo from './logo.svg';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Options from './components/Options';
import TeamPage from './components/TeamPage';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Reservation from './components/Reservation';
import Timeline from './components/Timeline';
import Banner2 from './components/Banner2';

function App() {
  return (
      <div>
        <Navbar />
        <Banner2 />
        <Services />
        <Options />
        <Timeline />
        <TeamPage />
        <Reservation />
        <Banner />
        <Footer />
      </div>
  );
}

export default App;