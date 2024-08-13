const API_KEY = "QFOrPvXiokLEBIoZcvIBhkiKaGc";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));


async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"))

    const response = await fetch(API_URL, {
                                method: "POST",
                                headers: {
                                        "Authorization": API_KEY,
                                body: form
                 }
        })
}


// Get function forthe api with the key and displays
async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`

    const response = await fetch(queryString);

    const data = await response.json()

    if (response.ok) {
        displayStatus(data)
    } else {
        throw new Error(data.error)
    }
}

function displayStatus(data){

    document.getElementById("resultsModalTitle").textContent=("API Key Status")
    document.getElementById("results-content").textContent=(`Your key is valid until \n ${data.expiry}`) 
    resultsModal.show()
}

