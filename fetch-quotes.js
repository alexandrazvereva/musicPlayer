let textQuote=document.querySelector("#quote-text");
let authorQuote= document.querySelector("#quote-author");
  fetch("https://type.fit/api/quotes")
      .then(response => response.json())
     .then(array => {
      let randomNum= Math.floor(Math.random() * (array.length - 0 + 1)) + 0;
      //let filteredArray=array.filter(element=>element.data===dataValue)
     
      textQuote.innerHTML=`"${array[randomNum].text}"`;
      authorQuote.innerHTML = array[randomNum].author;

  

         })

        

//  document.querySelector("#register-button").addEventListener("click", () => {
//     fetch("https://type.fit/api/quotes")
//       .then(response => response.json())
//       .then(array => {
//         let filteredArray = array.filter(element => element.data === dataValue);
//         console.log(filteredArray);
//         filteredArray.map(item => {
//           let fact = document.createElement("p");
//           fact.innerHTML = item.fact;
//         });
//       }
//       );
//   });
// }

