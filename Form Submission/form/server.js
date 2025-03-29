const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the form
app.get('/', (req, res) => {
    res.render('form', { message: null });
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const message = `Thank you, ${name}! Successfully sumitted.`;
    res.render('form', { message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});