
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Received: GET /');
});

const server = app.listen(3000, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`API listening at http://${host}:${port}`);
});