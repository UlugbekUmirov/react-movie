import React, { useState } from "react";
export default function Search({ searchMovie }) {
  const [search, setSearch] = useState("simpsons");
  const [type, setType] = useState("all");

  const handlekey = (e) => {
    if (e.key === "Enter") {
      searchMovie(search, type);
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handelFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovie(search, e.target.dataset.type);
  };

  return (
    <div className="">
      <div className="search__form">
        <input
          type="search"
          placeholder="Search..."
          className="search__input "
          value={search}
          onKeyDown={handlekey}
          onChange={handleChange}
        />
        <button
          className="search-btn"
          onClick={() => searchMovie(search, type)}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      {/* </form> */}
      <div className="labels">
        <label>
          <input
            className="with-gap blue darken-2 "
            name="group3"
            type="radio"
            data-type="all"
            onChange={handelFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap blue darken-2"
            name="group3"
            type="radio"
            data-type="movie"
            onChange={handelFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap blue darken-2"
            name="group3"
            type="radio"
            data-type="series"
            onChange={handelFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
}
