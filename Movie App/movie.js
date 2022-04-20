import { API_KEY, SEARCH_API, MOVIES_API, criticsApi } from './getApi.js'
import { WRAPPER, SEARCH_MOVIE_BUTTON, CRITICS_BUTTON, ALL_MOVIES_BUTTON } from './getElements.js'


import { getResponse, getAllMovies } from './getAllMovies.js'
import { getSearchedMovies } from './searchMovies.js'
import { getCritics } from './critics.js'

//Filter by movies Name
SEARCH_MOVIE_BUTTON.addEventListener("click", function() {
    var storeInput = document.formdata.moviesearch.value;
    getSearchedMovies(storeInput);
    document.getElementById('form').reset();
    WRAPPER.innerHTML = '';
});
//Filter by critics
CRITICS_BUTTON.addEventListener("click", function() {
    var criticsInput = document.formdata.criticssearch.value;
    //console.log("critics Input:", criticsInput);
    criticsApi(criticsInput);


    document.getElementById('form').reset();
    WRAPPER.innerHTML = '';
});

//All movies
ALL_MOVIES_BUTTON.addEventListener("click", function() {
    getAllMovies();
    WRAPPER.innerHTML = '';
});














// API information.
// const API_key = "46tN4Qxp352e3t5gPGKQ5lWwKUPKfxdc"
// const apiUrl = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?query&api-key=${API_key}`;
// //const testingUrl = `https://api.nytimes.com/svc/movies/v2/critics/all.json?query&api-key=${API_key}`
// //const searchUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query&api-key=${API_key}`;

// // Selecting our Elements.
// const main = document.getElementById("main");
// const wrapper = document.getElementById("wrapper");
// const form = document.getElementById("form");

// // getAllMoview = () => {
// //     return fetch(apiUrl)
// // }

// showMovies(apiUrl);
// //showMovies(testingUrl);

// function searchMovie(apiUrl) {
//     const search = document.form.search.value; /*Storing the value from the users input*/
//     // getAllMoview()
//     // .then({ data } => {

//     // })
//     fetch(apiUrl).then(function(res) {
//         return res.json();
//     }).then(function(data) {
//         let array = [];
//         array = data.results;

//         const result = array.filter(value => {
//             return value.display_title;
//         })

//         for (var i = 0; i <= array.length; i++) {
//             var filterTitle = result[i].display_title;
//             console.log(filterTitle);
//         }

//         // if (filterTitle === search) {
//         //     return true;
//         //     // const searchCard = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=${API_key}`;

//         //     // showMovies(searchCard);
//         //     // wrapper.innerHTML = searchCard;
//         // } else {
//         //     return false;
//         // }
//     });
// }


// async function showMovies(url) {
//     try {
//         const response = await fetch(url);
//         if (response.status) {
//             const data = await response.json();
//             console.log(data);

//             data.results.forEach(value => {
//                 // Creating elemnts for our data inside the main tag. 
//                 const card = document.createElement('div');
//                 const image = document.createElement('img');
//                 const title = document.createElement('h2');
//                 const rating = document.createElement('h5');
//                 const link = document.createElement('a');
//                 const summary = document.createElement('p');

//                 image.setAttribute('src', value.multimedia.src);
//                 title.innerHTML = value.display_title;
//                 rating.innerHTML = "Rating:" + '&nbsp' + value.mpaa_rating;
//                 link.setAttribute('href', value.link.url);
//                 link.setAttribute("target", "_blank");
//                 link.innerHTML = "Movie Review";
//                 summary.innerHTML = "Description:" + '<br>' + value.summary_short;

//                 card.appendChild(image);
//                 card.appendChild(title);
//                 card.appendChild(rating);
//                 card.appendChild(summary);
//                 card.appendChild(link);

//                 wrapper.appendChild(card);

//             });
//         } else {
//             throw new Error("something wrong");
//         }
//     } catch (err) {
//         console.log(err.message);
//     }

// }




/*    API CALL    */
// const API_key = "46tN4Qxp352e3t5gPGKQ5lWwKUPKfxdc"

// async function fetchData() {

//     const API_call = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?query&api-key=${API_key}`);
//     //   const API_call = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=RRR&api-key=${API_key}`);   //displays only RRR movie data 

//     /*Converting JSON format to javascript object ,we use .json() method*/
//     const response = await API_call.json();
//     console.log(response);
// }
// fetchData();


/*    synchronous fetch using .then:    */

// function showMovies(url) {
//     fetch(url).then(res => res.json())
//         .then(function(data) {
//              console.log(data);

//             data.results.forEach(value => {
//                 // Creating elemnts for our data inside the main tag. 
//                 const card = document.createElement('div');
//                 const image = document.createElement('img');
//                 const title = document.createElement('h2');
//                 const rating = document.createElement('h5');
//                 const link = document.createElement('a');
//                 const summary = document.createElement('p');

//                 // console.log("title:", value.display_title);

//                 image.setAttribute('src', value.multimedia.src);
//                 title.innerHTML = value.display_title;
//                 rating.innerHTML = "Rating:" + value.mpaa_rating;
//                 link.setAttribute('href', value.link.url);
//                 link.innerHTML = "Movie Review";
//                 summary.innerHTML = value.summary_short;

//                 card.appendChild(image);
//                 card.appendChild(title);
//                 card.appendChild(rating);
//                 card.appendChild(link);
//                 card.appendChild(summary);

//                 main.appendChild(card);

//             });
//         });
// }