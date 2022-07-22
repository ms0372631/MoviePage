import React, {useState, useEffect, useContext} from "react";
import { MovieComponent2 } from "./movie1/MovieComponent2";
import { IMG_API } from "./API";
import { MovieContext } from "../App";
import "./ListPageStyle.css";

export const LikeList = () => {
  // movieContext.savedList[].like => true -> in like list
  // movieContext.savedList[].like => false -> in block list
  // movieContext.savedList[].movie => movie_data
  const movieContext = useContext(MovieContext);

  return (
      <div className="page">
        {movieContext.savedList
        .filter(item=>item.like)
        .map(item =>
        <MovieComponent2
        key={item.movie.id}
        item={item} />
        )}
      </div>
  );
}
