import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import movieStyle from "./movieStyle.css";
import myImage from "./Cream_Soda_sprite_001.png";


export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likevalue: 'like',
            blockvalue: 'block',
            movieTitle: '',
            release_date: '',
            vote_count: '',
            avg_score: '',
            overview: ''

        };
        this.getMovie = this.getMovie.bind(this);       // fetch API method
        this.ShowMovies = this.ShowMovies.bind(this);   // show movie data
        this.likeClick = this.likeClick.bind(this);     // like button method
        this.blockClick = this.blockClick.bind(this);   // block button method
        this.movieList = this.movieList.bind(this);     // component render method
    }

    // mutable method
    getMovie(event, url){
        fetch(url)
        .then((res => res.json()))
        .then(data=>{})
    }

    // mutable method
    ShowMovies(data){
        main.innerHTML = "";
        data.forEach(movie => {
            const {title, poster_path, release_date, overview, vote_average, vote_count} = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('main');
            movieEl.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="movie-title">
                    ${title}
                </div>
                <div class="release-date">
                    ${release_date}
                </div>`;
    
            main.appendChild(movieEl);
        }) 
    }

    likeClick(event){
        if(this.state.likevalue === 'like'){
            this.setState({likevalue: 'liked'})
        }
        if(this.state.likevalue === 'liked'){
            this.setState({likevalue: 'like'})
        }
        event.preventDefault();
    }

    blockClick(event){
        if(this.state.blockvalue === 'block'){
            this.setState({blockvalue: 'blocked'})
        }
        if(this.state.blockvalue === 'blocked'){
            this.setState({blockvalue: 'block'})
        }
        event.preventDefault();
    }

    movieList(event){
        return (
            <React.Fragment>
                <div className='list'>
                    <div><img src={myImage} alt="horse" /></div>
                    <div className='btn'>
                        <button id="like" onClick={this.likeClick}>{this.state.likevalue}</button>
                        <button id="block" onClick={this.blockClick}>{this.state.blockvalue}</button>
                    </div>
                    <div className="detail">
                        <div id="movieName">Movie Name</div>
                        <div>Release Date: 1993-10-20</div>
                        <div className='ranking'>
                            <div>Vote Count: 1940</div>&nbsp;|&nbsp;
                            <div>Average Score: 9.1/10</div>
                        </div>
                    </div>
                    <div className='description'>detail</div>
                </div>
            </React.Fragment>
        );
    }

    render(){
        return (
            <React.Fragment>
                <this.movieList/>
            </React.Fragment>
        );
    }
}