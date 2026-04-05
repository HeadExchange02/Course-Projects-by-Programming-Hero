import { useState } from "react"

export default function likeCounter(){

    const [like, setLike] = useState(0)

    const handleLike = () =>{
        const newLike = like + 1;
        setLike(newLike);
        console.log('like:', newLike)
    }

    const likeStyle = {
        border: '2px solid skyblue'
    }
    return(
        <div style={likeStyle}>
            <h3>Likes: {like}</h3>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}