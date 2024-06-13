const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error.js');

dotenv.config();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

console.log(MONGO_URL);

// Check if MONGO_URL is defined
if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in the environment variables.");
  process.exit(1); // Terminate the application
}

// MongoDB connection
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on('error', (err) => {
    console.log("Error Connecting to Database", err);
});

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route Imports
const customerRoutes = require('./routes/customerRoutes.js');
const productRoutes = require('./routes/productRoutes.js');  // Make sure this import statement is correct
const orderRoutes = require('./routes/orderRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const { authorizeRoles } = require('./middlewares/auth.js');

// Route Middleware
app.use('/api/customer', customerRoutes);
app.use('/api/product', productRoutes);  // Ensure this line is correct
app.use('/api/order', orderRoutes);
app.use('/api/admin', authorizeRoles, adminRoutes);

// Error Middleware
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send(`Welcome to Scizers Assignment! Made by Trisha Sahu`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
