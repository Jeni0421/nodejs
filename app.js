// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files (CSS, JS, images)
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Routes
// Home Route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Contact Route (GET and POST)
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

app.post('/contact', (req, res) => {
  // Handle form submission logic here
  res.send('Form submitted');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
