
const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected to database: ' + process.env.DB_DATABASE + ' as ' + process.env.DB_USER + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT);
    }
});

app.get('/recruit/id', (req, res) => {
    console.log('GET ' + req.url + '    ' + JSON.stringify(req.body));
    if (req.body === undefined || req.body['id'] === undefined || req.body['id'] === NaN) {
        // does not exist, or is not a number
        res.status(400).send({ 'message': 'id is required and must be a number' });
    } else {
        // id is a number
        const id = req.body['id'];
        const { responseGetRecruitById } = require('./GetRecruit.js');
        responseGetRecruitById(db, req, res, id);
    }
});

app.get('/recruit/u_name', (req, res) => {
    console.log('GET ' + req.url + '    ' + JSON.stringify(req.body));
    if (req.body === undefined || req.body['u_name'] === undefined) {
        // does not exist
        res.status(400).send({ 'message': 'u_name is required' });
    } else {
        const u_name = req.body['u_name'];
        const { responseGetRecruitByUName } = require('./GetRecruit.js');
        responseGetRecruitByUName(db, req, res, u_name);
    }
})

app.get('/recruits', (req, res) => {
    console.log('GET ' + req.url + '    ' + JSON.stringify(req.body));
    const { responseGetAllRecruits } = require('./GetRecruit.js');
    responseGetAllRecruits(db, req, res);
})

app.put('/recruit', (req, res) => {
    console.log('PUT ' + req.url + '    ' + JSON.stringify(req.body));
    const { responsePutRecruit } = require('./PutRecruit.js');
    responsePutRecruit(db, req, res);
});

const server = app.listen(3000, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`API listening at http://${host}:${port}`);
});