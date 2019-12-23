const userUrl = require('valid-url');
const handleSubmit = function(event) {
    event.preventDefault()

console.log("::: Form Submitted :::");

    let formText = document.getElementById('name').value;
    // check what text was put into the form field
    //Client.handleSubmit(formText)

    // check for valid url
    if(userUrl.isUri(formText)) {
        fetchAylien('http://localhost:8080/article', formText);
    } else {
        document.getElementById('error-message').innerHTML = 'Please Enter a Valid URL.';
    }
};
const fetchAylien = async (url, input) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        body: JSON.stringify({text: input})
    })

        try {
        const data = await response.json();
        console.log(data);
        return data;
        } catch(error) {
        console.log("error", error);
    };
}

export { handleSubmit }