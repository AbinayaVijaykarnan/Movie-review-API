//import { API_KEY } from './getApi.js'
import { WRAPPER } from './getElements.js'

//Search movies:

function getCritics(CRITICS_API) {

    // var name = criticsInput;
    //var name = CRITICS_INPUT.value; // data from user 
    // const CRITICS_API = `https://api.nytimes.com/svc/movies/v2/critics/${name}.json?query&api-key=${API_KEY}`;

    fetch(CRITICS_API).then((res) => res.json()).then((data) => {
        console.log("critics data:", data);

        const heading = document.createElement('h1');
        heading.innerHTML = "CRITICS";
        heading.setAttribute("class", "criticsHeading");
        WRAPPER.appendChild(heading);

        data.results.filter(value => {

            console.log("Critics input is valid");

            const criticscard = document.createElement('div');
            criticscard.setAttribute("id", "criticsDiv");

            const authorname = document.createElement('h2');
            const status = document.createElement('h5');
            const bio = document.createElement('p');

            authorname.innerHTML = "Reviewer:" + '&nbsp' + value.display_name;
            bio.innerHTML = "Bio:" + '<br>' + (value.bio ? value.bio : "null");

            criticscard.appendChild(authorname);
            criticscard.appendChild(status);
            criticscard.appendChild(bio);


            WRAPPER.appendChild(criticscard);
        });

    }).catch((error) => {
        console.log("error in url:", error.message);
    });
}

export { getCritics };