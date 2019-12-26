const userUrl = require('valid-url');
import { fetchAylien } from './js/formHandler';

// check for valid url
if (userUrl.isUri(formText)) {
    fetchAylien('http://localhost:8080/article', formText);

} else {
    document.getElementById('error-message').innerHTML = 'Please Enter a Valid URL.';
}

export { userUrl }