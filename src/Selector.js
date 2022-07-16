import React from "react";
import { useState } from "react";

export const Selector = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (num) => {
    setCurrentPage(currentPage + num);
  }

  return (
    <div>
      <button onClick={() => changePage(-1)} disabled={currentPage === 1}></button>
        <p>Current Page is {currentPage}</p>
      <button onClick={() => changePage(1)}></button>
    </div>
  )
};