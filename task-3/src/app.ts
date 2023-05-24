// The template of data types the response data is expected to follow
interface JokeData {
    id: string;
    joke: string;
    status: number;
}

// Function to fetch a new joke from the API
async function fetchQuote() {
    const response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: { accept: "application/json" },
    });
    const data = await response.json();
    console.log(data);
    return data;
}

// Function to insert the fetched joke into the HTML element with id "quote"
function insertQuote(data: JokeData) {
    let quoteSelector = document.querySelector('#quote');
    if (quoteSelector) {
        quoteSelector.textContent = data.joke;
    }
}

// Function to handle the click event on the "Next Joke" button
function nextQuoteClick() {
    let nextJokeButtonSelector = document.querySelector('#next-joke-button');
    nextJokeButtonSelector?.addEventListener("click", fetchNewQuote);
}

// Function to fetch a new joke and insert it into the HTML element
async function fetchNewQuote() {
    const data = await fetchQuote();
    insertQuote(data);
}

// Function to initialize the application
async function initializeApp() {
    await fetchNewQuote(); // Fetch and display the initial joke
    nextQuoteClick(); // Add event listener to the "Next Joke" button
}

initializeApp(); // Start the application
