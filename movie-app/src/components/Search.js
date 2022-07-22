import React from "react";
export default class Search extends React.Component {
  state = {
    search: "simpsons",
    type: "all",
  };

  handlekey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };
  handleChange = (e) => {
    this.setState(() => ({ search: e.target.value }));
  };
  handelFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div className="">
        {/* <form className="search__form"> */}
        <div className="search__form border-none">
          <input
            type="search"
            placeholder="Search..."
            className="search__input "
            value={this.state.search}
            onKeyDown={this.handlekey}
            onChange={this.handleChange}
          />
          <button
            className="search-btn"
            onClick={() =>
              this.props.searchMovie(this.state.search, this.state.type)
            }
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
              onChange={this.handelFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap blue darken-2"
              name="group3"
              type="radio"
              data-type="movie"
              onChange={this.handelFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap blue darken-2"
              name="group3"
              type="radio"
              data-type="series"
              onChange={this.handelFilter}
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}
