import React from 'react'
import {useState, useEffect} from "react";
import MovieDisplay from './Components/MovieDisplay'
import Form from './Components/Form';

function App(props) {
const apiKey = "98e3fb1f";
const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
     // Parse JSON response into a javascript object
     const data = await response.json();
     //set the Movie state to the movie
     setMovie(data);
   };

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className='App'>
       <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>

    </div>
  )
}

export default App