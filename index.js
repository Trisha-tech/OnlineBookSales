const express = require(`express`);
const app = express();
const PORT =  8080;
const dotenv = require(`dotenv`);
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const errorMiddleware = require("./middlewares/error.js");

// dotenv.config({path : `.env`})
require('dotenv').config();
console.log(process.env.MONGO_URL);

/*MONGODB CONNECTION START*/
const MONGO_URL = process.env.MONGO_URL ;
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

app.use("/customer", customer);
app.use("/product", product);
app.use("/order", order);

// Middleware for Errors
app.use(errorMiddleware);
app.get('/', (req, res) => {
    res.send(`Welcome to Scizers Assignment !!!    Made by Trisha Sahu`);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})