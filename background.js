const apiKey = "5003d80eae5efa337423801e1fc82f0f";
let timeOfDay = "evening";
const query = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;

fetch(query)
    .then(resp => resp.json())
    .then(arr => {
        console.log(arr.photos.photo[0].url_l);
        let pic = arr.photos.photo[0].url_l;
        document.body.style.backgroundImage = `url(${pic})`;
    })
