import React, {Component} from "react";
import LikeMovie from "./LikeMovie";


const LikeMovie = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`url`).then((response) => response.json())
        .then(data => setData(data))
    }, []);
    
    return (
        <div classNamme="Like Movie">
        <img src={poster_path} alt="title"></img>
        <icon><FaSplotch style={{color: 'red', fontSize: '50px'}} onClick={handleLike}/></icon>
        <icon><FaTrash style={{color: 'red', fontSize: '50px'}} onClick={handleDelete}/></icon>
        <icon><FaRegWindowClose style={{color: 'red', fontSize: '50px'}} onClick={handleBlock}/></icon>
        </div>
    )

}
export default LikeMovie;