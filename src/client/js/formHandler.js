//import { isURL } from ('./helpers');
//import { isURL } from 'validator';
const userUrl = require('valid-url');
function handleSubmit(event) {
    event.preventDefault();

    var url = document.querySelectorAll('input[name=input-url');
    // check what text was put into the form field
    // let formText = document.getElementById('name').value
    // checkForName(formText)

    // check for valid url
    if(Client.userUrl(JSON.parse(JSON.stringify(url[0].value))))
    {
        console.log("::: Form Submitted :::");
        console.log("Requesting Information");
        console.log(JSON.stringify(url[0].value));
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: url[0].value})
        })

/* Shows results or errors on page */
    .then(res => res.json())
    .then(function(res) {
        console.log(res); // for debugging
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('polarity_confidence').innerHTML = res.subjectivity;
        document.getElementById('subjectivity').innerHTML = res.polarity_confidence;
        document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;
        document.getElementById('excerpt').innerHTML = res.excerpt;
    });
 } else {
    showError('Please Enter a Valid URL');

    }
}


showHideResults();

export { handleSubmit }
