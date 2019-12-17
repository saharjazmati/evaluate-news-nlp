
//var aylienTextAPI = require('aylien_textapi');

// var textapi = new aylien({
//   application_id: process.env.API_ID,
//   application_key: process.env.API_KEY
// });

const app = require('./app');
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080!')
});