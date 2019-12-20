/* Validate URL */
import { isURL } from 'validator';

isURL('http|https|www.');

/* Show errors */
const closeError = (msg) => {
    document.getElementsById('error').classList.add('hide');
}

/* Show errors */
const showError = (msg) => {
    document.getElementsByClassName('.errorText').innerHTMl = msg;
    document.getElementById('error').classList.remove('hide');
}

const hideElement = (elementID, hide = '') => {
    hide === 'hide' ? document.getElementById(elementID).classList.add('hide') : document.getElementById(elementID).classList.remove('hide');
}

const showHideResults = (hide = '') => hideElement('results', hide);

export {
    isURL,
    closeError,
    showError,
    hideElement,
    showHideResults
};
