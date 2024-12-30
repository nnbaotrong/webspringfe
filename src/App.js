import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const refreshProducts = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Warehouse Management</h1>
      <ProductForm refreshProducts={refreshProducts} />
      <ProductList />
    </div>
  );
}

export default App;
