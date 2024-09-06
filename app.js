// app.js
const express = require('express');
const bodyParser = require('body-parser'); // Required to parse form data
const app = express();
const port = 3000;

// Middleware to serve static files (CSS, JS, images)
app.use(express.static('public'));

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Home Route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Contact Route (GET) - Render contact form
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Contact Route (POST) - Handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body; // Extract form data

  // Process the feedback (for example, save to database, log, etc.)
  console.log('Feedback received:', { name, email, message });

  // Send a response back to the user
  res.send('Thank you for your feedback!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
