import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cartItems');
    setCartItems(saved ? JSON.parse(saved) : []);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              <p className="font-semibold">{item.name}</p>
              <p>Price: {item.price}</p>
              <p>Category: {item.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
