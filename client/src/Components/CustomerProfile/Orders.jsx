import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, book: 'Book Title 1', date: '2023-09-15', status: 'Delivered' },
    { id: 2, book: 'Book Title 2', date: '2023-08-12', status: 'Shipped' },
  ];

  return (
    <div className="orders">
      <h2>My Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p><strong>{order.book}</strong></p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
