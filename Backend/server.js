// Import the Express framework to create a web server
const express = require('express');

// Initialize an Express application
const app = express();

// Define the port number on which the server will listen
const port = 4000;

// Import the CORS middleware to allow cross-origin requests
const cors = require('cors');

// Enable CORS for all routes, allowing access from any origin
app.use(cors());

// Manually configure CORS headers for more control over cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");         // Allow any origin to access the API
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specified HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specified headers
  next(); // Pass control to the next middleware function
});

// Define a GET route for the root URL ("/") that responds with a simple "Hello World" message
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define a GET route for "/api/movies" that returns a list of movie objects in JSON format
app.get('/api/movies', (req, res) => {

    // Sample movie data to be returned as JSON in the response
    const movies = [
        {
          "Title": "Avengers: Infinity War (server)",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War (server)",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z (server)",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];

    // Send a 200 OK status and the movie data as JSON in the response
    res.status(200).json({ movies });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


