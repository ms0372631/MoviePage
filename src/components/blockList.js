import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../App";

export const Blockist = () => {
  const movieLists = useContext(MovieContext);
  
  useEffect(() => {
    
  }, [movieLists.Blockist])

  return (
    <>List of BlockLists</>
  )
}