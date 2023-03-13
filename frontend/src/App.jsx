import Navbar from './components/Navbar/Navbar';
import Image from './images/pexels-asad-photo-maldives-1450353.jpg';
import Router from './components/Routes/Router';
import Footer from './components/Footer/Footer';
import './app.scss';
import WelcomeText from './components/WelcomeText/WelcomeText';

function App() {

  return (
    <>
      <Navbar/>
      <WelcomeText className="WelcomeText" />
      <img className='beachimg' src={Image} alt="Beach" />
      <Router />
      <Footer />
    </>
  );

}

export default App;
