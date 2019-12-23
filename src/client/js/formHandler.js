const userUrl = require('valid-url');
const handleSubmit = function(event) {
    event.preventDefault();

console.log("::: Form Submitted :::");

    let formText = document.getElementById('name').value;
    // check what text was put into the form field
    // checkForName(formText)

    // check for valid url
    if(userUrl.isUri(formText)) {
        fetchAylien('http://localhost:8080/article', formText);
    } else {
        document.getElementById('error').innerHTML = 'Please Enter a Valid URL.';
    }

const fetchAylien = async (url, input) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: input})
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
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
};
}
module.exports = handleSubmit;