import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constant";
import axios from "../../axios"; //nerathe creat cheytha base url adangiya axios vilichhu
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    {
      /**ivide page lload or render avumbol useEffect work avum */
    }
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[Math.floor(Math.random() * 20 + 1)]);
        {
          /**ivide 20 akathulla random number select cheyum */
        }
      });
  }, []);
   console.log(movie);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, #00000000, #000000bd), url(${
          movie ? imageUrl + movie.backdrop_path : ""
        })`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        {/* //ivide movie undengil movie.title varanam allengil empty avanam */}
        <div className="banner_button">
          <button className="button">
            <i className="fa-solid fa-play"></i> Play
          </button>
          <button className="button">
            <i className="fa-solid fa-plus"></i> My list
          </button>
        </div>
        <p className="discription">{movie ? movie.overview : ""}</p>
      </div>
    </div>
  );
}

export default Banner;
