import React from 'react';
import ReactDOM from 'react-dom/client';
import movieStyle from "./movieStyle.css";
import myImage from "../../assets/Cream_Soda_sprite_001.png";

import { IMG_API } from "../API";


export const MovieComponent = ({movie}) => {
  // TODO:: add to like/block list

  return (
      <React.Fragment>
          <div className='list'>
              <div><img src={`${IMG_API}${movie.poster_path}`} alt="" /></div>
              <div className='btn'>
                  <button id="like">Like</button>
                  <button id="block">Block</button>
              </div>
              <div className="detail">
                  <div id="movieName">{movie.title}</div>
                  <div>Release Date: {movie.release_date}</div>
                  <div className='ranking'>
                      <div>Vote Count: {movie.vote_count}</div>
                      <div>Rating: {movie.vote_average}/10</div>
                  </div>
              </div>
              <div className='description'>{movie.overview}</div>
          </div>
      </React.Fragment>
  );
}
// export default class Movie extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             likeValue: 'like',
//             blockValue: 'block',
//             movieTitle: this.props.name,
//             release_date: this.props.release_date,
//             vote_count: this.props.vote_count,
//             avg_score: this.props.vote_average,
//             overview: this.props.overview
//         };
//
//         this.
//
//         this.movieList = this.movieList.bind(this);
//     }
//
//     likeClick(event){
//         if(this.state.likeValue === 'like'){
//             this.setState({likeValue: 'liked'})
//         }
//         if(this.state.likeValue === 'liked'){
//             this.setState({likeValue: 'like'})
//         }
//         event.preventDefault();
//     }
//
//     blockClick(event){
//         if(this.state.blockValue === 'block'){
//             this.setState({blockValue: 'blocked'})
//         }
//         if(this.state.blockValue === 'blocked'){
//             this.setState({blockValue: 'block'})
//         }
//         event.preventDefault();
//     }
//
//     movieList(event){
//         return (
//             <React.Fragment>
//                 <div className='list'>
//                     <div><img src={`${IMG_API}${this.props.movie.poster_path}`} alt="" /></div>
//                     <div className='btn'>
//                         <button id="like" onClick={(e)=>this.likeClick(e)}>{this.state.likeValue}</button>
//                         <button id="block" onClick={(e)=>this.blockClick(e)}>{this.state.blockValue}</button>
//                     </div>
//                     <div className="detail">
//                         <div id="movieName">{this.props.movie.title}</div>
//                         <div>Release Date: {this.props.movie.release_date}</div>
//                         <div className='ranking'>
//                             <div>Vote Count: {this.props.movie.vote_count}</div>
//                             <div>Rating: {this.props.movie.vote_average}/10</div>
//                         </div>
//                     </div>
//                     <div className='description'>{this.props.movie.overview}</div>
//                 </div>
//             </React.Fragment>
//         );
//     }
//
//     render(){
//         return (
//             <React.Fragment>
//                 <this.movieList/>
//             </React.Fragment>
//         );
//     }
// }
