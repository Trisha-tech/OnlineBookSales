const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { sendContactEmail } = require('./controllers/mailcontroller.js');
const errorMiddleware = require("./middlewares/error.js");

// Load environment variables from .env file
dotenv.config(); // Simplified as we don't need to specify path if it's in the root directory
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

// Check if MONGO_URL is defined
if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in the environment variables.");
  process.exit(1); // Terminate the application
}

/* MONGODB CONNECTION START */
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error Connecting to Database", err);
});
/* MONGODB CONNECTION END */

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from localhost:3000
    optionsSuccessStatus: 200,
    credentials: true, // Allow sending cookies from the frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow the HTTP methods you use
    allowedHeaders: ["Content-Type", "auth-token", "Origin", "X-Requested-With", "Accept"], // Allow headers
  })
);

// Route Imports
const customer = require("./routes/customerRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const order = require("./routes/orderRoutes.js");
const admin = require("./routes/adminRoutes.js");
const wishlistRoutes = require("./routes/wishlistRoutes.js");
const { authorizeRoles } = require("./middlewares/auth.js");

app.use("/customer", customer);
app.use("/api/product", productRoutes);
app.use("/order", order);
app.use(bodyParser.json());

app.use("/admin", authorizeRoles, admin);
app.use("/api/wishlist", wishlistRoutes);

// New Route for Cart
const cartRoutes = require("./routes/cartRoutes.js");
app.use("/api/cart", cartRoutes);

// Middleware for Errors
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send(`Welcome to Scizers Assignment !!! Made by Trisha Sahu`);
});

// Define the POST route for contact
app.post("/contact", sendContactEmail);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
