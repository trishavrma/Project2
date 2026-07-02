const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('Hello!');
});

app.post('/greet', (req, res) => {
    res.send('Goodbye!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});