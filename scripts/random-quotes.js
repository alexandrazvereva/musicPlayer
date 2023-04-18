const textQuote = document.querySelector("#quote-text");
const authorQuote = document.querySelector("#quote-author");
const refreshButton = document.querySelector("#quote-icon");
getRandomQuote();

refreshButton.addEventListener("click", () => getRandomQuote())
function getRandomQuote() {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(array => {
      let randomNum = Math.floor(Math.random() * (array.length - 0 + 1)) + 0;
      textQuote.innerHTML = `"${array[randomNum].text}"`;
      authorQuote.innerHTML = array[randomNum].author;
    })
};





