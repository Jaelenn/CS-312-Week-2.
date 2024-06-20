const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Making sure that any form data sent to your server is translated 
// into a format that your server can easily understand and work with
app.use(bodyParser.urlencoded({ extended: true }));

// This route is for the homepage of our server.
// The function req and res handles the response when a user visits the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ensures the numbers are properly formatted and prepares to store the answer for the user
app.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = num1 + num2;

    res.send(`
        <p>The result is: ${result}</p>
        <button onclick="window.history.back()">Back</button>
    `);
});

// This route is for the BMI calculator form page.
// It sends the bmiCalculator.html file when a user visits /bmicalculator
app.get('/bmicalculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'bmicalculator.html'));
});

// Ensures the weight and height are properly formatted and prepares to store the BMI calculation result
app.post('/bmicalculator', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height * height);

    res.send(`
        <p>Your BMI is: ${bmi.toFixed(2)}</p>
        <button onclick="window.history.back()">Back</button>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
