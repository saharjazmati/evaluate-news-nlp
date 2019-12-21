const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
var bodyParser = require('body-parser');

const express = require('express');
const app = express();
var aylienAPI = require('aylien_textapi');

var textapi = new aylienAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('dist'));

//const app = require('./app');
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080!')
});

// route.get('/favicon.ico', (_req, res) => res.sendFile(path.join(__dirname, '../src/client/views/index.html')))

app.get('/',function(req,res){
    res.sendFile(path.resolve("./src/client/views/index.html"))//./src/client/views/index.html'));
});

// route.get("/", (req, res) => {
//    res.sendFile(path.resolve('../views/index.html')
// });

// API request sent to Aylien API
app.post('/apicall', (req, res) => {
// result data object will send back to the user's browser
    const results = {};
    results.url = req.body.url;

// the 1st api request is sent
    textapi.extract({
        url: req.body.url,
        best_image: true
    },
    (errExtract, resExtract) => {
        //check for errors, if no errors
        if (errExtract === null) {
            // this adds the article, title and image to the results
            resExtract.article != '' ? results.text =
            resExtract.article.slice(0, 300) + '...' : '';
            resExtract.title != '' ? resultData.title = resExtract.title : '';
            resExtract.image != '' ? resultData.image = resExtract.image : '';

            if(resExtract.article != '') {

          //second API request is sent if the article is not empty
          textapi.sentiment(
            {'text': resExtract.article},
            (errSentiment, resSentiment) => {

                //if not errors
              if (errSentiment === null) {
                console.log(resSentiment);
                //add new sentiment result to resultData object
                results.polarity = resSentiment.polarity;
                results.subjectivity = resSentiment.subjectivity;
                results.polarity_confidence = (resSentiment.polarity_confidence).toFixed(2);
                results.subjectivity_confidence = (resSentiment.subjectivity_confidence).toFixed(2);

                //send the results to the browser
                res.send(resultData);
              }
        }
    );
} else {
    //if text is empty send error message to the browser
          res.send({
            error: `Unfortunately, no text was found on the page<br>
                    Please, try another URL/Web Page!`
          });
}
} else {
        //error message for bad url to the browser/user
        res.send({
          error: `The URL you requested was not found.<br>
                  Please, check the URL and try again!`
        });
}
    });
});