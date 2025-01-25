import React from 'react';
import Info from './components/info.jsx'
import PhoneForm from './components/phone.jsx';

function App() {
  return (
    <div className="border-2 flex items-center justify-center">
      <Info/>
      <PhoneForm/>
    </div>
  );
}

export default App;
