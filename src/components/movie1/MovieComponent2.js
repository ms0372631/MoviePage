import React, { useContext } from "react";
import { FaSplotch, FaTrash, FaRegWindowClose } from "react-icons/fa";
import { MovieContext } from "../../App";


export const MovieComponent2 = () => {
  const movieContext = useContext(MovieContext);
  // TODO:: icon onclick -> remove from list & move to like/block list

  return (
    <div classNamme="Like Movie">
      <img src="" alt=""></img>
      <icon><FaSplotch style={{color: 'red', fontSize: '50px'}}/></icon>
      <icon><FaTrash style={{color: 'red', fontSize: '50px'}}/></icon>
      <icon><FaRegWindowClose style={{color: 'red', fontSize: '50px'}}/></icon>
    </div>
  )
}
