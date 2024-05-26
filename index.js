const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const errorMiddleware = require("./middlewares/error.js");

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;
const SESSION_SECRET = process.env.SESSION_SECRET || "defaultSecretKey"; // Add a default value for development

// Check if essential environment variables are defined
if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in the environment variables.");
  process.exit(1); // Terminate the application
}

if (!SESSION_SECRET) {
  console.error("SESSION_SECRET is not defined in the environment variables.");
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
  console.error("Error Connecting to Database", err);
});
/* MONGODB CONNECTION END */

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
const cors = require("cors");
app.use(cors());

// Session middleware configuration
app.use(
  session({
    secret: SESSION_SECRET, // Use the secret from environment variables
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Route Imports
const customer = require("./routes/customerRoutes.js");
const product = require("./routes/productRoutes.js");
const order = require("./routes/orderRoutes.js");
const admin = require("./routes/adminRoutes.js");
const auth = require("./routes/authRoutes.js"); // Import authentication routes
const { authorizeRoles } = require("./middlewares/auth.js");

// Mount routes
app.use("/customer", customer);
app.use("/product", product);
app.use("/order", order);
app.use("/admin", authorizeRoles, admin);
app.use("/auth", auth);

// Middleware for Errors
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Scizers Assignment !!! Made by Trisha Sahu");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
