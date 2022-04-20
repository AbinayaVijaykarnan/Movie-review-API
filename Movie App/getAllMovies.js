import { MOVIES_API } from './getApi.js'
import { MAIN, WRAPPER } from './getElements.js'


const getResponse = () => {
    return fetch(MOVIES_API)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
};

function getAllMovies() {
    console.log("all movies-working");

    getResponse().then(data => {

        const heading = document.createElement('h1');
        heading.innerHTML = "ALL MOVIES";
        heading.setAttribute("class", "allMoviesHeading");
        WRAPPER.appendChild(heading);

        data.results.forEach(value => {
            const card = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h2');
            const rating = document.createElement('h5');
            const link = document.createElement('a');
            const summary = document.createElement('p');



            image.setAttribute('src', value.multimedia.src);
            title.innerHTML = value.display_title;
            rating.innerHTML = "Rating:" + '&nbsp' + value.mpaa_rating;
            link.setAttribute('href', value.link.url);
            link.setAttribute("target", "_blank");
            link.innerHTML = "Movie Review";
            summary.innerHTML = "Description:" + '<br>' + value.summary_short;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(rating);
            card.appendChild(summary);
            card.appendChild(link);

            WRAPPER.appendChild(card);

        });
    });
}

export { getResponse, getAllMovies };

// getAllMovies();