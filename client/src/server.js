const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/userSchema'); // Import User model

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

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

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
