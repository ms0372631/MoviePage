import React, {Component} from "react";
import {useState} from "react"; 
import "./likeMovie.css";


const LikeMovie = () => {
    const [data, setData] = useState(null);
    const [Like, setLike] = useState(null);
    const [Delete, setDelete] = useState(null);
    const [Block, setBlock] = useState(null);

    // useEffect(() => {
    //     fetch(`url`).then((response) => response.json())
    //     .then(data => setData(data))
    // }, []);

    return (
        <React.Fragment>
        <div classNamme="Like Movie">
         <img src='sea.jpg' alt='sea'></img>
         <button onClick={()=>setLike(false)} className="like">Like</button>
         <button onClick={()=>setDelete(false)} className="delete">Delete</button>
         <button onClick={()=>setBlock(false)} className="block">Block</button>
        </div>
        </React.Fragment>
    
    )
}

export default LikeMovie;