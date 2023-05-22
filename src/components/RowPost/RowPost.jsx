import React, { useEffect, useState } from "react";
import {API_KEY, imageUrl } from "../../constants/constant";
import YouTube from 'react-youtube';
import axios from "../../axios";
import "./RowPost.css";

function RowPost(props) {
  const [posts, setPost] = useState([]);
  const [UrlId, setUrlId] = useState('')
  useEffect(() => {
    
    axios
      .get(`${props.url}`)
      .then((response) => {
        // console.log(response.data.results);
        setPost(response.data.results);

        // poster_path
      });
  }, []);
// react youtube options 
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  }
}

const handleMovie =(id)=>{
  setUrlId(null)
  console.log(UrlId);
console.log(id);
console.log(API_KEY);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  // console.log(response.data.results[0].key);
  if(response.data.results.length !== 0)setUrlId(response.data.results[0].key)
  
})
}
  return (
    <div className="row">
      <h2 key={"HELLO"}>{props.title}</h2>
      <div className="posters">
        {posts.map((images, I) => {
          return (
            <img
            key={I}
            onClick={()=>handleMovie(images.id)}
              className={props.isSmall ? 'smallPoster': 'poster'}
              src={`${imageUrl + images.poster_path}`}
              alt=""
            />
          );
        })}
      </div>
      {/* <YouTube videoId="2g811Eo7K8U" opts={opts}/> */}
      {UrlId ?<YouTube videoId={`${UrlId}`} opts={opts}/> : null }
    </div>
  );
}

export default RowPost;
