/* eslint-disable no-unused-vars */
import React from "react";
import {useState, useEffect} from 'react';
import "./LikeMovie.css"


const LikeMovie = () => {
    const [data, setData] = useState(null);
    const [images, setImage] = useState([]);

    useEffect(() => {
        fetch(`url`).then((response) => response.json())
        .then(data => setData(data))
    }, [data]);

    const handleDelete = (id) => {
        setImage((prevState) => prevState.filter((item) => item.id !== id));
    };

    const handleBlock = (id) => {

    }
    
    return (
        <div classNamme="Like Movie">
        {images.map((image) => {
            return(
                <div>
                <img src='sea.jpg' alt='sea'></img>
                <button onClick={() => handleDelete(image.id)} className="delete">Delete</button>
                <button onClick={() => handleBlock(image.id)} className="block">Block</button>
                </div>
            );
        })}
        </div>
    );
};
export default LikeMovie;