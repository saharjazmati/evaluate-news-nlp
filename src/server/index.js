var path = require('path');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
let apicall = require('./helpers')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('dist'));

//const app = require('./app');
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080!')
});

// route.get('/favicon.ico', (_req, res) => res.sendFile(path.join(__dirname, '../src/client/views/index.html')))

app.get('/',function(req,res){
    res.sendFile(path.resolve('./dist/index.html'))//./src/client/views/index.html'));
});

// API request sent to Aylien API
app.post('/', apicall.validRequest, apicall.apiPostRequest);

module.exports = app;