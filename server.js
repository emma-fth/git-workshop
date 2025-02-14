const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello world!</h1><p>Its me!</p>');
});

app.get('/contactpage', (req, res) => {
    res.send('<h1>Contact: efeth012@berkeley.edu</h>');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}); 