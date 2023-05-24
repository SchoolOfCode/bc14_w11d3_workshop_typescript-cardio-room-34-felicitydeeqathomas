// Contains a HTML blockquote element (for displaying a fetched quote)
// Contains a button element (for fetching a quote)

//select the quote id from the html and use document queryselector

let blockQuoteElement: HTMLElement | null = document.querySelector("#blockquote");




async function fetchJoke() {
    try {
      // Send a GET request to the API
      const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
          Accept: 'application/json',
        },
      });
  
      // Parse the response JSON
      
      
      const data = await response.json();

      if (blockQuoteElement) {
      blockQuoteElement.innerHTML = data;
      console.log(data);

      // Display the joke in the blockquote element
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    } 
  } 

fetchJoke()
