import React from "react";
import "./PageSwitch.sass";

export const PageSwitch = ({page, totalPages, switchPage}) => {
  return (
    <>
      <div className="page-info">
        <button disabled={page === 1 ? true : false}
                onClick={() => switchPage(page - 1)}> Prev </button>
        <p> {page} / {totalPages} </p>
        <button disabled={page === totalPages ? true : false}
                onClick={() => switchPage(page + 1)}> Next </button>
      </div>
    </>
  );
};
