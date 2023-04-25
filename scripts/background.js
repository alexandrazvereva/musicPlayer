const apiKey = "5003d80eae5efa337423801e1fc82f0f";
let timeOfDay = "evening";
const query = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;

let picsArray = [];
let currentPicNumber = 49;
fetch(query)
    .then(resp => resp.json())
    .then(arr => {
        picsArray = arr.photos.photo.map(element => element.url_l)
        let pic = picsArray[currentPicNumber];
        document.body.style.backgroundImage = `url(${pic})`;
    });

document.querySelector("#slider-left").addEventListener("click", () => {
    currentPicNumber--;
    let pic = picsArray[currentPicNumber];
    document.body.style.backgroundImage = `url(${pic})`;
})
document.querySelector("#slider-right").addEventListener("click", () => {
    currentPicNumber++;
    let pic = picsArray[currentPicNumber];
    document.body.style.backgroundImage = `url(${pic})`;
})
