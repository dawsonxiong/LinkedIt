import Info from './components/info.jsx'
import PhoneForm from './components/phone.jsx';
import Background from './assets/bg.png'
import Email from './components/EmailList.jsx';
import Profile from './components/Profile.jsx';

import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [showInfo, setShowInfo] = useState(true);
  const [spacing, setSpacing] = useState('-space-x-120');
  const [spaceX, setSpaceX] = useState('space-x-60');
  const [rMargin, setrMargin] = useState('pr-38');
  const [animate, setAnimate] = useState(false);

  const handleSearchClick = () => {
    setShowInfo(false);
    setAnimate(true);
    setTimeout(() => {
      setSpacing('-space-x-160');
      setSpaceX('space-x-100');
      setrMargin('pr-75');
      setAnimate(false);
    }, 0); 
  };

  const handleHomeClick = () => {
    setShowInfo(true);
    setSpacing('-space-x-120');
    setSpaceX('space-x-60');
    setrMargin('pr-38');
  };

  return (
    <div className={`bg-[url('./assets/bg.png')] flex items-center justify-center w-screen h-screen ${spaceX} ${rMargin} transition-all duration-100 ease-in-out`}>
      {showInfo ? <Info /> : <Profile />}
      <div className={`flex ${spacing} transition-all duration-100 ease-in-out`}>
        <Email onHomeClick={handleHomeClick} />
        <PhoneForm onSearch={handleSearchClick} className={animate ? 'slide' : ''} />
      </div>
    </div>
  );
}

export default App;
