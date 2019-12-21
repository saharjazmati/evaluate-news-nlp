// import {isURL, closeError, showError, showHideResults} from ('./helpers');


// function handleSubmit(event) {
//     event.preventDefault();

//     var url = document.querySelectorAll('input[name=input-url');
    // check what text was put into the form field
    // let formText = document.getElementById('name').value
    // checkForName(formText)

    // check for valid url
    // if(Client.isURL(JSON.parse(JSON.stringify(url[0].value))))
    // {
    //     console.log("::: Form Submitted :::");
    //     console.log("Requesting Information");
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
        /* Shows results or errors on page */
//     .then(res => res.json())
//     .then(function(res) {
//         console.log(res); // for debugging
//         document.getElementById('polarity').innerHTML = res.polarity;
//         document.getElementById('polarity_confidence').innerHTML = res.subjectivity;
//         document.getElementById('subjectivity').innerHTML = res.polarity_confidence;
//         document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;
//         document.getElementById('excerpt').innerHTML = res.excerpt;
//     });
// } else {
//     showError('Please Enter a Valid URL');

//     }
// }


// showHideResults();
/* This sends the user's URL (POST request) to server */
// const sendRequest = async (url = '', data = {}) => {
//         const res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
    //     try {
    //         const data = await res.json();
    //         return data;
    //     } catch (err) {
    //         showError(err);
    //     }
    // };


// const displayContent = (data) => {

//     if(data.error) {
//         showError(data.error);
//     } else {
//         //get results
//         const apiresults = document.getElementById('results');

//         // add results dynamically


//     }
// }




//export { handleSubmit }








// Post data


