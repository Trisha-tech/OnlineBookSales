const express = require(`express`);
const path=require('path');
const app = express();
const dotenv = require(`dotenv`);
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const errorMiddleware = require("./middlewares/error.js");

// dotenv.config({path : `.env`})
require("dotenv").config();
const PORT = process.env.PORT || 8080;
console.log(process.env.MONGO_URL);

/*MONGODB CONNECTION START*/
const MONGO_URL = process.env.MONGO_URL;

// cors
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend's origin
    optionsSuccessStatus: 200,
  }),
);

// Check if MONGO_URL is defined
if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in the environment variables.");
  process.exit(1); // Terminate the application
}

// MongoDB connection
mongoose.connect(MONGO_URL, {
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports

app.use("/customer", customer);
app.use("/api/product", productRoutes);
app.use("/order", order);

app.use("admin", authorizeRoles, admin);
// Middleware for Errors
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send(`Welcome to Scizers Assignment !!!    Made by Trisha Sahu`);
});
