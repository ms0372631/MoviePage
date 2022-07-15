import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import movieStyle from "./movieStyle.css";

export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likevalue: 'like',
            blockvalue: 'block'
        };
        this.likeClick = this.likeClick.bind(this);
        this.blockClick = this.blockClick.bind(this);
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
                <div className=''>
                    <div src="#"><img/>mmnfe lfen </div>
                    <div className=''>
                        <button onClick={this.likeClick}>{this.state.likevalue}</button>
                        <button onClick={this.blockClick}>{this.state.blockvalue}</button>
                    </div>
                    <div>Movie Name</div>
                    <div>Release Date</div>
                    <div className=''>
                        <div>Vote Count</div>
                        <div>Average Score</div>
                    </div>
                    <div className=''></div>
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