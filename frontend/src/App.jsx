import Navbar from './components/Navbar/Navbar';
import Image from './images/pexels-asad-photo-maldives-1450353.jpg';
import Router from './components/Routes/Router';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Navbar/>
      <img className='beachimg' src={Image} alt="Beach" />
      <Router />
      <Footer />
    </>
  );

}

export default App;
