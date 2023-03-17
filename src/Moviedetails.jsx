import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Moviedetails = () => {
  const { id } = useParams();
  const nav = useNavigate();

  console.log(id);
  const { movieData, loading, isError } = useFetch(`i=${id}`);
  console.log(movieData);
  const {
    Poster,
    Title,
    Released,
    imdbRating,
    Actors,
    Country,
    Genre,
    Plot,
    Language,
  } = movieData;
  return (
    <>
      <h2>{loading && "loading...."}</h2>
      <h2>{isError.status && isError.msg}</h2>
      <header>Movie details</header>
      {Object.keys(movieData).length && (
        <div className="movie-details-container">
          <div className="img-div">
            <img src={Poster} alt={Title} />
          </div>
          <div className="details-div">
            <h4>
              <b>Title: </b>
              {Title}
            </h4>
            <h4>
              <b>Actors: </b>
              {Actors}
            </h4>
            <h4>
              <b>Country: </b>
              {Country}
            </h4>
            <h4>
              <b>Genre: </b>
              {Genre}
            </h4>
            <h4>
              <b>Lang: </b>
              {Language}
            </h4>
            <h4>
              <b>IMDB:</b>
              {imdbRating}🌟
            </h4>
            <h4>
              <b>Released: </b>
              {Released}
            </h4>

            <h4>
              <b>Plot: </b>
              {Plot}
            </h4>
          </div>
        </div>
      )}

      <button
        className="home-btn"
        onClick={() => {
          nav("/");
        }}
      >
        back to home
      </button>
    </>
  );
};

export default Moviedetails;
