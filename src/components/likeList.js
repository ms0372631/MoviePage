import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../App";

export const LikeList = () => {
  const movieLists = useContext(MovieContext);
  
  useEffect(() => {
    
  }, [movieLists.LikeList])

  return (
    <>List of LikeLists</>
  )
}