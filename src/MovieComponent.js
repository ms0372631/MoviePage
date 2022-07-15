import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import movieStyle from "./movieStyle.css";
import myImage from "./Cream_Soda_sprite_001.png";

const baseURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6e23fd51b4a49f543bd4a70b013b1fc0';
const pageURL = '&language=en-US&page=';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likevalue: 'like',
            blockvalue: 'block',
            baseURL: baseURL,
            pageURL: pageURL,
            IMG_URL: IMG_URL
        };
        this.likeClick = this.likeClick.bind(this);
        this.blockClick = this.blockClick.bind(this);
        this.getMovie = this.getMovie.bind(this);
        this.movieList = this.movieList.bind(this);
    }

    getMovie(event){}

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