import React from 'react';
import './PurchaseList.scss';
import products from './PurchaseListData'; 

const PurchasesList = () => {
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);
  const taxRate = 0.12;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  return (
    <div>
      <h2>Purchases</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Taxes: ${taxes.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PurchasesList; 
