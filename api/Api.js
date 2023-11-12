
const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
dotenv.config({path: './.env'});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port : process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Successfully connected to database: ' + process.env.DB_DATABASE + ' as ' + process.env.DB_USER + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT);
    }
});

query = 'SELECT '

db.query(query, (err, result) => {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

app.get('/recruit/id', (req, res) => {
    const url = req.url;
    const body = req.body;
    console.log('GET ' + url + '    ' + JSON.stringify(body));

    if(body === undefined || body['id'] === undefined || body['id'] === NaN) {
        // does not exist, or is not a number
        res.status(400).send({'message': 'id is required and must be a number'});
    } else {
        // id is a number
        data = {}
        res.status(200).send({'message': 'success', 'data': data});
    }
});

app.post('/recruit')

const server = app.listen(3000, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`API listening at http://${host}:${port}`);
});