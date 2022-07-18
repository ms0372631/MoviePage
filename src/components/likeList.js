import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../App";

export const LikeList = () => {
  const movieLists = useContext(MovieContext);
  const [likeList, useLikeList] = useState();
  
  useEffect(() => {
    
  }, [movieLists.LikeList])

  return (
    <>List of LikeLists</>
  )
}