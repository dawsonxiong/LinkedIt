import React from 'react';
import Info from './components/info.jsx'
import PhoneForm from './components/phone.jsx';
import Background from './assets/bg.png'

function App() {
  return (
    <div className="bg-cover bg-center flex items-center justify-center w-screen h-screen bg-[url(./assets/bg.png)] space-x-10">
      <Info/>
      <PhoneForm/>
    </div>
  );
}

export default App;
