import React from "react";
import "./Sort.sass";

export default class Sort extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let sortByTitle = this.props.sortBy === "title" ? 1 : -1,
        arrow = this.props.reverse === sortByTitle ? "↓" : "↑";
    return (
      <>
        <div className="sorting">
          <button onClick={() => this.props.sortMovies("title")}>
            Title {this.props.sortBy === "title" && arrow}
          </button>
          <button onClick={() => this.props.sortMovies("release_date")}>
            Release Date  {this.props.sortBy === "release_date" && arrow}
          </button>
          <button onClick={() => this.props.sortMovies("vote_count")}>
            Vote Count  {this.props.sortBy === "vote_count" && arrow}
          </button>
          <button onClick={() => this.props.sortMovies("vote_average")}>
            Rating  {this.props.sortBy === "vote_average" && arrow}
          </button>
        </div>
      </>
    );
  }
}
