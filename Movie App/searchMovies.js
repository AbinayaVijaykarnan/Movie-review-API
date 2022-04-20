import { SEARCH_API } from './getApi.js'
import { WRAPPER } from './getElements.js'
// import { INPUT_VALUE } from './movie.js'

//SEARCH_HEADING.style.display = "none";

//Search movies:

function getSearchedMovies(storeInput) {
    console.log("searched movies-working");

    //event.preventDefault();
    const INPUT_VALUE = storeInput; // data from user 

    console.log(" Movie Input Value:", INPUT_VALUE);

    const DYNAMIC_URL = SEARCH_API + '&query=' + INPUT_VALUE; //getting data from user and appending it in query

    // INPUT_VALUE = "";
    // console.log(" Movie Input AFTER", INPUT_VALUE);

    fetch(DYNAMIC_URL).then((res) => res.json()).then((data) => {
        console.log("search data:", data);

        const heading = document.createElement('h1');
        heading.innerHTML = "SEARCHED MOVIES";
        heading.setAttribute("class", "searchedMovieHeading");
        WRAPPER.appendChild(heading);

        data.results.filter(value => {

            let text = value.display_title;
            let textlower = text.toLowerCase();
            let replace = textlower.replace(/-/g, ' ');
            let myArray = replace.split(" ");

            function check(word) {
                if (myArray.indexOf(word.toLowerCase()) !== -1) {
                    console.log("movie name matched");

                    const card = document.createElement('div');
                    card.setAttribute("id", "searchedMovieDiv");

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
                    card.appendChild(link);
                    card.appendChild(summary);

                    WRAPPER.appendChild(card);
                }
            }
            check(INPUT_VALUE);

        });
    }).catch((error) => {
        console.log("error in url:", error.message);
    });
};

export { getSearchedMovies };

/*SPLIT & SEARCH FOR A WORD IN STRING: */
// let text = "How are you doing today?";
// let textlower=text.toLowerCase();

// const myArray = textlower.split(" ");

// function check(word){
//     if(myArray.indexOf(word.toLowerCase())!== -1){
//     document.getElementById("demo").innerHTML ="working";
//     }
//     else{
//     document.getElementById("demo").innerHTML ="not working";
//     }
// }
// check("ANADOING");