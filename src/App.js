import React, { useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import feather from 'feather-icons';
function App() {
  
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className='wrapper'>
      <Sidebar />

      <div className='main'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
