const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS to allow requests from the frontend
app.use(cors());

// Sample order data
const orders = [
    { id: 1, item: 'Item 1' },
    { id: 2, item: 'Item 2' },
    { id: 3, item: 'Item 3' }
];

// Endpoint to fetch orders
app.get('/api/orders', (req, res) => {
    res.json(orders);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
