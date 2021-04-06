const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello AWS from HSL with the Review Step added!'));
app.get('/', (req, res) => res.send('Hello AWS from HSL with the Review Step added!'));
app.get('/', (req, res) => res.send('Hello AWS from HSL with the Review Step added!'));
app.get('/', (req, res) => res.send('Hello AWS from HSL with the Review Step added!'));
app.get('/', (req, res) => res.send('Hello AWS from HSL with the Review Step added!'));
app.get('/', (req, res) => res.send('Hello AWS from HSL with the Review Step added!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
