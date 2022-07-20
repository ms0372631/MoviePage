import React from "react";

import Carousel from "./carousel/Carousel"
import Sort from "./sort/Sort";
import PageSwitch from "./pageSwitch/PageSwitch";
import MovieComponent from "./movie1/MovieComponent";

import { getURL } from "./API";

export default class PagePopMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 1,
      sortBy: "title",
      reverse: 1,
      loading: true,
      movies: []
    };
  }

  sortMovies = (sortBy) => {
    if(this.state.sortBy === sortBy) {
      this.setState({
        reverse: this.state.reverse * -1
      });
    } else if(sortBy === "title") {
      this.setState({
        sortBy: sortBy,
        reverse: 1
      });
    } else {
      this.setState({
        sortBy: sortBy,
        reverse: -1
      });
    }
  }

  switchPage = (new_page) => {
    this.setState({
      page: new_page,
      loading: true
    })
    this.fetchData(new_page)
  }

  fetchData = (page) => {
    fetch(getURL("pop", page))
      .then(res => res.json())
      .then(res => {
        this.setState({
          page: res.page,
          totalPages: res.total_pages,
          loading: false,
          movies: res.results
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchData(1);
  }

  render() {
    return (
      <>
        <h1>Popular Movies</h1>
        <Sort sortBy={this.state.sortBy}
              sortMovies={this.sortMovies}
              reverse={this.state.reverse} />
        <PageSwitch page={this.state.page}
                    totalPages={this.state.totalPages}
                    switchPage={this.switchPage} />
        <div>
          {this.state.loading && (<Carousel />)}
          {this.state.movies
            .sort((a, b) => a[this.state.sortBy] > b[this.state.sortBy] ? this.state.reverse : -this.state.reverse)
            .map(item => (<MovieComponent
              key={item.id}
              id={item.id}
              movie={item} />))}
        </div>
      </>
    );
  }
}
