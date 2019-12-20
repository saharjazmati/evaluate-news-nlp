import {isURL, closeError, showError, showHideResults} from ('./helpers');

/* This sends the user's URL (POST request) to server */
const sendRequest = async (url = '', data = {}) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        try {
            const data = await res.json();
            return data;
        } catch (err) {
            showError(err);
        }
    };

/* Shows results or errors on page */
const displayContent = (data) => {

    if(data.error) {
        showError(data.error);
    } else {
        //get results
        const apiresults = document.getElementById('results');

        // add results dynamically
        

    }
}













// Post data


