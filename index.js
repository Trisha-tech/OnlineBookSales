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
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;
console.log(process.env.MONGO_URL);

/* MONGODB CONNECTION START */
const MONGO_URL = process.env.MONGO_URL;


// CORS
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "https://book4u-j5au.onrender.com"],  // Allow particular origins
    credentials: true,  
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // Allow all methods
    allowedHeaders: ["Content-Type", "auth-token", "Origin", "X-Requested-With", "Accept"],  // Allow all required headers
  })
);

// Check if MONGO_URL is defined
if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in the environment variables.");
  process.exit(1); // Terminate the application
}

// MongoDB connection
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
app.use("admin", authorizeRoles, admin);

// Middleware for Errors
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send(`Welcome to Scizers Assignment !!! Made by Trisha Sahu`);
});


// Define the POST route
app.post("/contact", sendContactEmail);
// New Route for Cart
const cartRoutes = require("./routes/cartRoutes.js");
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const books = {
  action: [
      {
          title: "Action Book 1",
          description: "An exciting action book.",
          author: "Author 1",
          cost: "$10"
      },
      {
          title: "Action Book 2",
          description: "Another thrilling action book.",
          author: "Author 2",
          cost: "$15"
      }
  ],
  thriller: [
      {
          title: "Thriller Book 1",
          description: "A spine-chilling thriller.",
          author: "Author 3",
          cost: "$12"
      },
      {
          title: "Thriller Book 2",
          description: "A suspenseful journey.",
          author: "Author 4",
          cost: "$18"
      }
  ],
  fiction: [
      {
          title: "Fiction Book 1",
          description: "A captivating fiction novel.",
          author: "Author 5",
          cost: "$14"
      }
  ],
  tech: [
      {
          title: "Tech Book 1",
          description: "Stay updated with technology.",
          author: "Author 6",
          cost: "$20"
      }
  ],
  philosophy: [
      {
          title: "Philosophy Book 1",
          description: "Deep insights into philosophy.",
          author: "Author 7",
          cost: "$25"
      }
  ],
  manga: [
      {
          title: "Manga Book 1",
          description: "Explore fascinating manga stories.",
          author: "Author 8",
          cost: "$10"
      }
  ]
};

function showBooks(category) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books[category].forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book';
      bookDiv.innerHTML = `<strong>${book.title}</strong> <button class="button" onclick="openModal('${book.title}', '${book.description}', '${book.author}', '${book.cost}')">View Details</button>`;
      bookList.appendChild(bookDiv);
  });
}

function openModal(title, description, author, cost) {
  document.getElementById('book-title').innerText = title;
  document.getElementById('book-description').innerText = description;
  document.getElementById('book-author').innerText = author;
  document.getElementById('book-cost').innerText = cost;
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function purchaseBook() {
  alert('Book purchased!');
  closeModal();
}
