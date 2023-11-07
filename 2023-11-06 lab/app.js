const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/validate', (req, res) => {
  const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]\d{4}$/;
  const urlRegex = /^(https?):\/\/([A-Za-z0-9\-]+(?:\.[A-Za-z0-9\-]+)(?:\.[A-Za-z]{2,})+)(\/[^?#])?(?:\?([^#]))?(?:#(.))?$/;

  const email = req.body.email;
  const phone = req.body.phone;
  const website = req.body.website;

  const errors = [];

  if (!email.match(emailRegex)) {
    errors.push('Invalid email address');
  }

  if (!phone.match(phoneRegex)) {
    errors.push('Invalid phone number');
  }

  if (!website.match(websiteRegex)) {
    errors.push('Invalid website URL');
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    res.json({ message: 'Validation successful' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
