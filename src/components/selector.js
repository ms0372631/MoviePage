import React from "react";
import { useState } from "react";
import "../styles/selector.css";

export const Selector = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (num) => {
    setCurrentPage(currentPage + num);
  }

  return (
    <div className="selector">
      <button className="selector-btn" onClick={() => changePage(-1)} disabled={currentPage === 1}>Prev</button>
        <p>Current Page is {currentPage}</p>
      <button className="selector-btn" onClick={() => changePage(1)}>Next</button>
    </div>
  )
};