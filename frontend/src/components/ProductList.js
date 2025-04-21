import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error(err);
        setError('Failed to load products. Please try again later.');
      });
  }, []);

  const addToCart = (productId) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/cart`, { productId, quantity: 1 })
      .then((res) => console.log('Added to cart:', res.data))
      .catch((err) => console.error('Failed to add to cart:', err));
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
