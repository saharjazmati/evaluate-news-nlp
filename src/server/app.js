const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'));

//console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// Post data


module.exports = app;