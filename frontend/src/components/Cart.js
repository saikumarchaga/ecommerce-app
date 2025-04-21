import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  const fetchCart = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cart`)
      .then((res) => setCart(res.data))
      .catch((err) => {
        console.error(err);
        setError('Failed to load cart. Please try again later.');
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const checkout = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/cart`)
      .then(() => {
        alert('Checkout successful!');
        fetchCart();
      })
      .catch((err) => console.error('Checkout failed:', err));
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="py-2">
                Product ID: {item.productId}, Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <button
            onClick={checkout}
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
