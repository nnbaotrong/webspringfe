import React, { useState } from 'react';
import axios from '../api/axios';

function ProductForm({ refreshProducts }) {
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/products', formData)
      .then(() => {
        refreshProducts();
        setFormData({ name: '', quantity: 0, price: 0 });
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        type="number"
        placeholder="Quantity"
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        type="number"
        placeholder="Price"
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
