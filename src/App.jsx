import React from 'react';
import Info from './components/info.jsx'
import PhoneForm from './components/phone.jsx';
import Background from './assets/bg.png'
import Email from './components/EmailList.jsx';
import Profile from './components/Profile.jsx';


function App() {
  return (
    <div className="bg-[url(./assets/bg.png)] flex items-center justify-center w-screen h-screen">
      <Profile/>
      {/* <Info/> */}
      
      <PhoneForm/>
      <Email/>
    </div>
  );
}

export default App;
