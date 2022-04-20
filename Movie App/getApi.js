import { getCritics } from './critics.js'
// API Information:

const API_KEY = "46tN4Qxp352e3t5gPGKQ5lWwKUPKfxdc";


const SEARCH_API = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${API_KEY}`;
const MOVIES_API = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?query&api-key=${API_KEY}`;

function criticsApi(criticsInput) {
    const CRITICS_API = `https://api.nytimes.com/svc/movies/v2/critics/${criticsInput}.json?query&api-key=${API_KEY}`;
    getCritics(CRITICS_API);
}

export { API_KEY, SEARCH_API, MOVIES_API, criticsApi }


//const CRITICS_API = `https://api.nytimes.com/svc/movies/v2/critics/all.json?query&api-key=${API_KEY}`;
// const name = "Robert Alden";
// const CRITICS_API = `https://api.nytimes.com/svc/movies/v2/critics/${name}.json?query&api-key=${API_KEY}`;
// fetch(MOVIES_API)
//     .then(response => response.json())
//     .then(data => {
//         console.log("TEST TESING:", data);
//     });