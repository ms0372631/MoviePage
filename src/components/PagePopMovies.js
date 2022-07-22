import React, { useState, useEffect } from "react";

import Carousel from "./carousel/Carousel"
import Sort from "./sort/Sort";
import PageSwitch from "./pageSwitch/PageSwitch";
import { MovieComponent } from "./movie1/MovieComponent";

import { getURL } from "./API";

export const PagePopMovies = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("title");
  const [reverse, setReverse] = useState(1);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const sortMovies = (new_sortBy) => {
    if(sortBy === new_sortBy) {
      setReverse(reverse * -1);
    } else if(new_sortBy === "title") {
      setSortBy(new_sortBy);
      setReverse(1);
    } else {
      setSortBy(new_sortBy);
      setReverse(1);
    }
  };

  const switchPage = (new_page) => {
    setPage(new_page);
    setLoading(true);
    fetchData(new_page);
  };

  const fetchData = (page) => {
    fetch(getURL("pop", page))
      .then(res => res.json())
      .then(res => {
        setPage(res.page);
        setTotalPages(res.total_pages);
        setLoading(false);
        setMovies(res.results);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData(1);
  }, [])

  return (
    <>
      <h1>Popular Movies</h1>
      <Sort sortBy={sortBy}
            sortMovies={sortMovies}
            reverse={reverse} />
      <PageSwitch page={page}
                  totalPages={totalPages}
                  switchPage={switchPage} />
      <div className="movies_container">
        {loading && (<Carousel />)}
        {movies
          .sort((a, b) => a[sortBy] > b[sortBy] ? reverse : -reverse)
          .map(item => (<MovieComponent
            key={item.id}
            id={item.id}
            movie={item} />))}
      </div>
    </>
  );
}
