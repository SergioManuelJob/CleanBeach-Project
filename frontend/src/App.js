import React from 'react';
import Navbar from './components/Navbar';
import SignInPage from './components/SignIn/SignIn';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <SignInPage />
    </React.Fragment>
  );
}

export default App;
