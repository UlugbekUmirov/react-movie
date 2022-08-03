import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=329ffa13&s=simpsons")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);
  const SearchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  };

  return (
    <div className="content ">
      <Search searchMovie={SearchMovies} />
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}
