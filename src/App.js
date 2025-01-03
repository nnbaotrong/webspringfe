import React, { useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
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
        <main className="content">
          <div className="container-fluid p-0">
            <Dashboard/>
            <ProductForm/>
            <ProductList/>
          </div>
        </main>
        <Footer />

      </div>

    </div>
  );
}

export default App;
