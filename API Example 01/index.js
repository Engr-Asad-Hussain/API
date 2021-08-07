const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = "logo.png";
app.appendChild(logo);


const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);


// Create a request variable and assign a new XMLHttpRequest object to it.
// XMLHttpRequest will send a request from browser to a server.
var request = new XMLHttpRequest();


// Open a new connection, using GET request on the URL endpoint.
// open( ) is a method, used to initiallize a request.
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);


// function to be executed when the request completes successfully.
request.onload = function() {
    // Gegin accessing JSON data here
    var data = JSON.parse(this.response);
    // console.log(data);

    if (request.status >= 200 && request.status < 400) {
        data.forEach( (movie)=> {
            // Log each movie's title and description
            // console.log(movie.title);
            
            // Create a div with card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Append the cards to container element
            container.appendChild(card);
            
            // Create an h1 and set the textContent to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
            card.appendChild(h1);

            // Create a p element and set the textContent to the film's description
            const p = document.createElement('p');
            // movie.description = movie.description.substring(0, 300); // limit to 300 char
            p.textContent = `${movie.description}...`; // end with an ellipses
            card.appendChild(p);
        });
    }
    else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "Gah, it's not working!";
        app.appendChild(errorMessage);
        console.log("Error");
    }

}

// Send request
request.send()
