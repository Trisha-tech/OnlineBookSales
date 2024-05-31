const express = require(`express`);
const app = express();
const dotenv = require(`dotenv`);
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


const errorMiddleware = require("./middlewares/error.js");

// dotenv.config({path : `.env`})
require('dotenv').config();
const PORT = process.env.PORT || 8080;
console.log(process.env.MONGO_URL);

/*MONGODB CONNECTION START*/
const MONGO_URL = process.env.MONGO_URL ;

// cors
const cors=require("cors");
app.use(cors())

// Check if MONGO_URL is defined
if (!MONGO_URL) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(1); // Terminate the application
}

// MongoDB connection
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err) => {
    console.log("Error Connecting to Database", err)
})
/*MONGODB CONNECTION END*/

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


// Route Imports
const customer = require("./routes/customerRoutes.js");
const product = require("./routes/productRoutes.js");
const order = require("./routes/orderRoutes.js");
const admin = require("./routes/adminRoutes.js");
const { authorizeRoles } = require('./middlewares/auth.js');

app.use("/customer", customer);
app.use("/product", product);
app.use("/order", order);

app.use('admin',authorizeRoles,admin);
// Middleware for Errors
app.use(errorMiddleware);
app.get('/', (req, res) => {
    res.send(`Welcome to Scizers Assignment !!!    Made by Trisha Sahu`);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})



