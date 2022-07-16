
import React, {Component} from "react";
import App from "./App";
import {FaSplotch, FaTrash, FaRegWindowClose} from "react-icon/fa";

export default class likeMovie extends React.Component {
    handleLike = e => {

    }
    handleDelete = e => {

    }
    handleBlock = e => {

    }
    
    render() {
    return (
        <div>
        <img title="movie-poster" src={poster_path} alt="movie-poster"></img>
        <icon><FaSplotch style={{color: 'red', fontSize: '50px'}} onClick={handleLike}/></icon>
        <icon><FaTrash style={{color: 'red', fontSize: '50px'}} onClick={handleDelete}/></icon>
        <icon><FaRegWindowClose style={{color: 'red', fontSize: '50px'}} onClick={handleBlock}/></icon>
        </div>
    )      
}
}
