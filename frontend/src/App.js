import React from 'react';
import Navbar from './components/Navbar';
import Image from './images/pexels-asad-photo-maldives-1450353.jpg';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <img className='beachimg' src={Image} alt="Beach" />
    </React.Fragment>
  );

}

export default App;
