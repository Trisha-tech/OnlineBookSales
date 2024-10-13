const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../../models/customerSchema'); // Import User model

const app = express();
const port = process.env.PORT || 5000; // Use port from .env or fallback to 5000

// Enable CORS to allow requests from the frontend
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true // To allow cookies (for session management)
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Setup session
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration for Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if the user exists in the database
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
            // If user exists, return the user
            return done(null, user);
        } else {
            // If user doesn't exist, create a new user
            user = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            });
            await user.save(); // Save the new user in the database
            return done(null, user);
        }
    } catch (err) {
        console.error(err);
        return done(err, null);
    }
}));

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// Route to initiate Google OAuth flow
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback route
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }), // Change to /login or /auth/failure
    (req, res) => {
        console.log('Google authentication successful for user:', req.user);
        res.redirect('http://localhost:3000');
    }
);

// Endpoint to check the current user
app.get('/auth/current_user', (req, res) => {
    res.send(req.user); // Send the current authenticated user
});

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
