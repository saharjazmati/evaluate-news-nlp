const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
var bodyParser = require('body-parser');
var cors = require('cors');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylienTextAPI = require('aylien_textapi');

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'));

//console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// Post




module.exports = app;