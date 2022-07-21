import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import { FaSplotch, FaTrash, FaRegWindowClose } from "react-icons/fa";
import { MovieContext } from "../App";
import { IMG_API } from "../API";


export const MovieComponent2 = ({item}) => {
  const movieContext = useContext(MovieContext);
  // TODO:: icon onclick -> remove from list & move to like/block list
  const idx = movieContext.savedList.findIndex(movie => movie.movie.id === item.movie.id);

  const specialList = (action) => {
    // action = 0 -> remove from list
    // action = 1 -> move to like list
    // action = 2 -> move to block list
    let newList = JSON.parse(JSON.stringify(movieContext.savedList));
    switch(action) {
      case 0:
        newList.splice(idx, 1);
        break;
      case 1:
        newList[idx].like = true;
        break;
      case 2:
        newList[idx].like = false;
        break;
    }
    movieContext.setSavedList(newList);
  }

  return (
    <div className="Like Movie">
      <img src={`${IMG_API}${item.movie.poster_path}`} alt=""></img>
      <FaTrash style={{color: 'red', fontSize: '50px'}} onClick={() => specialList(0)}/>
      {!item.like && (<FaSplotch style={{color: 'red', fontSize: '50px'}} onClick={() => specialList(1)}/>)}
      {item.like && (<FaRegWindowClose style={{color: 'red', fontSize: '50px'}} onClick={() => specialList(2)}/>)}
    </div>
  )
}