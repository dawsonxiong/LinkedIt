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
    }, 300); 
  };

  return (
    <div className={`bg-[url('./assets/bg.png')] flex items-center justify-center w-screen h-screen ${spaceX} ${rMargin}`}>
      {showInfo ? <Info /> : <Profile />}
      <div className={`flex ${spacing}`}>
        <Email />
        <PhoneForm onSearch={handleSearchClick} className={animate ? 'slide' : ''} />
      </div>
    </div>
  );
}

export default App;
