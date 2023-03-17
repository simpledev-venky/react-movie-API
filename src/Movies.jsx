import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { movieContext } from "./movieContext";

const Movies = () => {
  

const {loading,isError,movieData,query, setQuery} = useContext(movieContext)

console.log(movieData);
  
  return (
    <>
    <header>Wandel's Ultimate Movies Destination</header>
      
      <div className="input">
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder="search your fav movie...."/>
      </div>
      <h2>{loading && "loading...."}</h2>
      <h2>{isError.status && isError.msg}</h2>
      <hr />

      <ul className="movies-container">
      {!loading && !isError.status && movieData.length &&
        movieData.map((eachMovie) => {
          const { Poster,Title,imdbID} = eachMovie;
          return (
            <Link key={imdbID} to={`/${imdbID}`} className="each-movie">
              <img src={Poster} alt={Title} />
              <h4>{Title}</h4>
            </Link>
          );
        })}
      </ul>
     
     
    </>
  );
};
export default Movies
