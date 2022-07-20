import React from 'react';
import ReactDOM from 'react-dom/client';
import movieStyle from "./movieStyle.css";
import myImage from "../../assets/Cream_Soda_sprite_001.png";

import { IMG_API } from "../API";


export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likevalue: 'like',
            blockvalue: 'block',
            movieTitle: this.props.name,
            release_date: this.props.release_date,
            vote_count: this.props.vote_count,
            avg_score: this.props.vote_average,
            overview: this.props.overview
        };

         this.movieList = this.movieList.bind(this);
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
                    <div><img src={`${IMG_API}${this.props.movie.poster_path}`} alt="" /></div>
                    <div className='btn'>
                        <button id="like" onClick={(e)=>this.likeClick(e)}>{this.state.likevalue}</button>
                        <button id="block" onClick={(e)=>this.blockClick(e)}>{this.state.blockvalue}</button>
                    </div>
                    <div className="detail">
                        <div id="movieName">{this.props.movie.title}</div>
                        <div>Release Date: {this.props.movie.release_date}</div>
                        <div className='ranking'>
                            <div>Vote Count: {this.props.movie.vote_count}</div>
                            <div>Rating: {this.props.movie.vote_average}/10</div>
                        </div>
                    </div>
                    <div className='description'>{this.props.movie.overview}</div>
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
