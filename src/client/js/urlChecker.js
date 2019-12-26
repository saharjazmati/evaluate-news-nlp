import { fetchAylien } from './js/formHandler';
const userUrl = require('valid-url');


// check for valid url
if (userUrl.isUri(formText)) {
    fetchAylien('http://localhost:8080/article', formText);

} else {
    document.getElementById('error-message').innerHTML = 'Please Enter a Valid URL.';
}

export { userUrl }