"use strict";
// Contains a HTML blockquote element (for displaying a fetched quote)
// Contains a button element (for fetching a quote)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//select the quote id from the html and use document queryselector
let blockQuoteElement = document.querySelector("#blockquote");
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Send a GET request to the API
            const response = yield fetch("https://icanhazdadjoke.com", {
                headers: {
                    Accept: 'application/json',
                },
            });
            // Parse the response JSON
            const data = yield response.json();
            if (blockQuoteElement) {
                blockQuoteElement.innerHTML = data.joke;
                console.log(data.joke);
                // Display the joke in the blockquote element
            }
        }
        catch (error) {
            console.error('Error fetching joke:', error);
        }
    });
}
fetchJoke();
