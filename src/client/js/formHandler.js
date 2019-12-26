import userUrl from { urlChecker };
const handleSubmit = function (event) {
    event.preventDefault()
    console.log("::: Form Submitted :::");
    let formText = document.getElementById('name').value;

const fetchAylien = async (url, input) => {
    if (userUrl.isUri(formText)) {
        fetchAylien('http://localhost:8080/article', formText);
    }
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        body: JSON.stringify({
            text: input
        })
    })
     .then(res => res.json())
     .then(function (res) {
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;
        document.getElementById('text').innerHTML = res.text;
    });
    }
}
export { handleSubmit, fetchAylien }