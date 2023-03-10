import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Image from './images/pexels-asad-photo-maldives-1450353.jpg';
import Dropdown from './components/Dropdown/Dropdown';
import SignInPage from './components/SignIn/SignIn';

function App() {

const [selected, setSelected] = useState('');

  return (
    <React.Fragment>
      <Navbar/>
      <img className='beachimg' src={Image} alt="Beach" />
      <Dropdown selected={selected} setSelected={setSelected} />
      <SignInPage />
    </React.Fragment>
  );

}

export default App;
