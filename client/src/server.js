const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
require('dotenv').config();

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

// Passport configuration for Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
},
function (accessToken, refreshToken, profile, done) {
    // Here you can check if the user exists in your DB and create one if not
    // For simplicity, we'll just return the profile
    return done(null, profile);
}));

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Setup session
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Route to initiate Google OAuth flow
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback route
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect to frontend
        res.redirect('http://localhost:3000');
    }
);

// Endpoint to check the current user
app.get('/auth/current_user', (req, res) => {
    res.send(req.user); // Send the current authenticated user
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
