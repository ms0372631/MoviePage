import React, { useState, useEffect, useContext } from "react";
import { MovieComponent2 } from "./movie1/MovieComponent2";

export const LikeList = () => {
  // movieContext.savedList[].like => true -> in like list
  // movieContext.savedList[].like => false -> in block list
  // movieContext.savedList[].movie => movie_data

  return (
    <>
      <MovieComponent2 />
    </>
  )
}
