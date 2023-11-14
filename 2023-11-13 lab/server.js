const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios'); // For API requests
const nodemailer = require('nodemailer'); // For sending verification email

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/user-auth', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', new mongoose.Schema({
    email: String,
    password: String,
    name: String, // Additional user information
    // ... other user data
}));

// Register route with added email verification
app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashedPassword, name });
    await user.save();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com', // Your email
            pass: 'your-email-password' // Your password
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: `Thank you for registering. Please verify your email by clicking on this link: http://localhost:3000/verify/${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ message: 'Error sending verification email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Verification email sent' });
        }
    });
});

// Login route
app.post('/login', async (req, res) => {
    // Your existing code for user login
});

// Weather route based on user's location
app.get('/userWeather', async (req, res) => {
    // Your existing code to retrieve weather based on user's location
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the User Authentication System'); // Or some HTML for your landing page
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});