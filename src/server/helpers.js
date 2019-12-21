const dotenv = require('dotenv');
dotenv.config();
/* Validate URL */
import { isURL } from 'validator';
isURL('http|https|www.');
var aylienAPI = require('aylien_textapi');

const validRequest = (req, res, next) => {
    if(!req.body.text) {
        return res.status(404).json({ message: 'Input Invalid' })
    }
    return next();
}

const apiPostRequest = (req, res, next) => {
    var textapi = new aylienAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
    textapi.sentiment({
        url: req.body.text,
        //mode: 'document',
        best_image: true
    }, function(error, response) {
        res.send(response)
    });
}

/* Show errors */
// const closeError = (msg) => {
//     document.getElementsById('error').classList.add('hide');
// }

/* Show errors */

// const showError = (msg) => {
//     document.getElementsByClassName('.errorText').innerHTMl = msg;
//     document.getElementById('error').classList.remove('hide');
// }

// const hideElement = (elementID, hide = '') => {
//     hide === 'hide' ? document.getElementById(elementID).classList.add('hide') : document.getElementById(elementID).classList.remove('hide');
// }

// const showHideResults = (hide = '') => hideElement('results', hide);

export {
    isURL,
    apiPostRequest,
    validRequest
};
