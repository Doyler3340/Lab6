import { useState } from "react";  // Import useState hook from React to manage component state
import axios from 'axios';          // Import axios for making HTTP requests

function Create() {
  // Define state variables to store the title, year, and poster URL input by the user
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior (page reload)
    
    // Log the entered movie details to the console for debugging
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    
    // Create a movie object using the state values
    const movie = {
      title: title,
      year: year,
      poster: poster
    };
    
    // Send a POST request to the backend to save the new movie
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))     // Log the server response data to the console if successful
      .catch((err) => console.log(err.data));   // Log any errors to the console if the request fails
  };

  // Render the component UI
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>  {/* Form submission triggers handleSubmit function */}
        
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}                     // Bind input value to title state
            onChange={(e) => { setTitle(e.target.value) }}  // Update title state on change
          />
        </div>

        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}                      // Bind input value to year state
            onChange={(e) => { setYear(e.target.value) }}    // Update year state on change
          />
        </div>

        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input
            type="text"
            className="form-control"
            value={poster}                    // Bind input value to poster state
            onChange={(e) => { setPoster(e.target.value) }}  // Update poster state on change
          />
        </div>

        <input type="submit" value="Add Movie" />  {/* Submit button triggers handleSubmit */}
      </form>
    </div>
  );
}

export default Create;   // Export the Create component so it can be used in other parts of the app
