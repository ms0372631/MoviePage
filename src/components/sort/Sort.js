import React from "react";
import "../../styles/Sort.sass";

export const Sort = ({sortBy, sortMovies, reverse}) => {
  const sortByTitle = sortBy === "title" ? 1 : -1,
        arrow = reverse === sortByTitle ? "↓" : "↑";

  return (
    <>
      <div className="sorting">
        <button onClick={() => sortMovies("title")}>
          Title {sortBy === "title" && arrow}
        </button>
        <button onClick={() => sortMovies("release_date")}>
          Release Date  {sortBy === "release_date" && arrow}
        </button>
        <button onClick={() => sortMovies("vote_count")}>
          Vote Count  {sortBy === "vote_count" && arrow}
        </button>
        <button onClick={() => sortMovies("vote_average")}>
          Rating  {sortBy === "vote_average" && arrow}
        </button>
      </div>
    </>
  );
}
