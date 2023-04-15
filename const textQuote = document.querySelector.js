const textQuote = document.querySelector("#quote-text");
const authorQuote = document.querySelector("#quote-author");
const refreshButton = document.querySelector(".reload-quote-icon");

getRandomQuote();

refreshButton.addEventListener("click", () => getRandomQuote())

function getRandomQuote() {
    fetch("https://type.fit/api/quotes")
        .then(resp => resp.json())
        .then(arr =>  {
            let randomItem = Math.ceil(Math.random() * arr.length-1 ); 
            textArea.innerHTML = `"${arr[randomItem].text}"`;
            authorArea.innerHTML = arr[randomItem].author || "unknown";
        })
}
