import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from '../../../components'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));

    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>Supplier</th>
                        <th>Images</th>
                        <th>Description</th>
                        <th>Expiry Date</th>
                        <th>Manufacturer</th>
                        <th>Manufacturing Date</th>
                        <th>Storage Conditions</th>
                        <th>Category</th>
                        <th>Active Ingredient</th>
                        <th>Toxicity Level</th>
                        <th>Usage Instruction</th>
                        <th>Target Pests</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.productCode}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>{product.unit}</td>
                            <td>{product.supplier}</td>
                            <td>{product.images ? <img src={product.images} alt="product" width={50} /> : "No Image"}</td>
                            <td>{product.description}</td>
                            <td>{product.expiryDate}</td>
                            <td>{product.manufacturer}</td>
                            <td>{product.manufacturingDate}</td>
                            <td>{product.storageConditions}</td>
                            <td>{product.category?.name}</td>
                            <td>{product.activeIngredient}</td>
                            <td>{product.toxicityLevel}</td>
                            <td>{product.usageInstruction}</td>
                            <td>{product.targetPests}</td>
                            <td>
                                <button onClick={() => handleEdit(product.id)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Placeholder functions for actions
const handleEdit = (id) => {
    console.log(`Edit product with ID: ${id}`);
};

const handleDelete = (id) => {
    console.log(`Delete product with ID: ${id}`);
};

export default Products;
