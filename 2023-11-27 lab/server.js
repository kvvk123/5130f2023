const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('./db.js');  // Importing the database connection from db.js
const app = express();


app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Create users table (if it doesn't exist)
db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT)", (err) => {
    if (err) {
        console.error('Error creating users table:', err.message);
    } else {
        console.log("Users table created");
    }
});

// Sign Up Endpoint
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password || password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        res.status(400).json({ success: false, message: 'Invalid data' });
        return;
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hashedPassword], function(err) {
            if (err) {
                console.error('Error registering new user:', err.message);
                res.status(500).json({ success: false, message: 'Error registering new user' });
            } else {
                res.status(201).json({ success: true, message: 'Signup successful' });
            }
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Sign In Endpoint
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) {
            console.error('Error on the server:', err.message);
            res.status(500).json({ success: false, message: 'Error on the server.' });
        } else if (!user) {
            res.status(404).json({ success: false, message: 'User not found.' });
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.error('Error on the server:', err.message);
                    res.status(500).json({ success: false, message: 'Error on the server.' });
                } else if (result) {
                    // Redirect to success.html on successful signin
                    res.redirect('/success');
                } else {
                    res.status(401).json({ success: false, message: 'Password does not match.' });
                }
            });
        }
    });
});

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html');
});

app.post('/guest', (req, res) => {
    // Implement Guest Access logic here
    res.status(200).json({ success: true, message: 'Guest access granted' });
});

app.get('/test', (req, res) => {
    res.send('Test route is working');
});


const port = 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});