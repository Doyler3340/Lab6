import Movies from "./movies";         // Import the Movies component, which will display the list of movies
import { useEffect, useState } from "react";  // Import useEffect and useState hooks from React for managing lifecycle and state
import axios from "axios";              // Import axios to make HTTP requests

function Read() {
  // Define a state variable `movies` to store the fetched movies and initialize it as an empty array
  const [movies, setMovies] = useState([]);

  // useEffect hook to run the fetch operation only once when the component mounts
  useEffect(() => {
    // Fetch movies data from the backend API
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        // On success, update the movies state with the fetched data from the response
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);  // Log any errors that occur during the request
      });
  }, []);  // Empty dependency array means this effect runs only once after the initial render

  // Render the component UI
  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/* Pass the movies data as a prop to the Movies component */}
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;  // Export the Read component so it can be used in other parts of the app
