import Navbar from './components/Navbar/Navbar';
import Image from './images/pexels-asad-photo-maldives-1450353.jpg';
import Router from './components/Routes/Router';
import Footer from './components/Footer/Footer';
import './app.scss';
import WelcomeText from './components/WelcomeText/WelcomeText';
import { AboutUs, VolunteerText } from './components/VolunteerText/VolunteerText';

function App() {

  return (
    <>
      <Navbar/>
      <WelcomeText className="WelcomeText" />
      <img className='beachimg' src={Image} alt="Beach" />
      <Router />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7FD4D1" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,58.7C672,32,768,64,864,112C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <AboutUs />
      <VolunteerText />
      <Footer />
    </>
  );

}

export default App;
