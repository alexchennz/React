import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMovieHandler = useCallback(async () =>{
    setError(null);
    try{
      setIsLoading(true);
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error("something went wrong!");
      }
      const data =  await response.json();
      const transformedMovies = data.results.map(movieData =>{
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        }
      });
      setMovies(transformedMovies);
    }
    catch(e){
      setError(e.message);
    }
    setIsLoading(false);
  },[]) 

  useEffect(() =>{
    fetchMovieHandler();
  },[fetchMovieHandler]);

  let content = <p>Found no movies.</p>;

  if(movies.length > 0){
    content = <MoviesList movies={movies} />;
  }
  if(error){
    content = <p>{error}</p>;
  }
  if(isLoading){
    content = <p>Loading...</p>;
  }

  
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
