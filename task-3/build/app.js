"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to fetch a new joke from the API
function fetchQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://icanhazdadjoke.com/`, {
            headers: { accept: "application/json" },
        });
        const data = yield response.json();
        console.log(data);
        return data;
    });
}
// Function to insert the fetched joke into the HTML element with id "quote"
function insertQuote(data) {
    let quoteSelector = document.querySelector('#quote');
    if (quoteSelector) {
        quoteSelector.textContent = data.joke;
    }
}
// Function to handle the click event on the "Next Joke" button
function nextQuoteClick() {
    let nextJokeButtonSelector = document.querySelector('#next-joke-button');
    nextJokeButtonSelector === null || nextJokeButtonSelector === void 0 ? void 0 : nextJokeButtonSelector.addEventListener("click", fetchNewQuote);
}
// Function to fetch a new joke and insert it into the HTML element
function fetchNewQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchQuote();
        insertQuote(data);
    });
}
// Function to initialize the application
function initializeApp() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchNewQuote(); // Fetch and display the initial joke
        nextQuoteClick(); // Add event listener to the "Next Joke" button
    });
}
initializeApp(); // Start the application
