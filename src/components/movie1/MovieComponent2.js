import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import { FaSplotch, FaTrash, FaRegWindowClose } from "react-icons/fa";
import { MovieContext } from "../../App";


export const MovieComponent2 = () => {
  const movieContext = useContext(MovieContext);
  // TODO:: icon onclick -> remove from list & move to like/block list

  return (
    <div className="Like Movie">
      <img src="" alt=""></img>
      <FaSplotch style={{color: 'red', fontSize: '50px'}}/>
      <FaTrash style={{color: 'red', fontSize: '50px'}}/>
      <FaRegWindowClose style={{color: 'red', fontSize: '50px'}}/>
    </div>
  )
}
