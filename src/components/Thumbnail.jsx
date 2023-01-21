import React from "react";
import { useQuery } from "react-query";
import {getAllAnimes} from "../api/anime_api"

const Thumbnail = () => {
  const {data}=useQuery('topanimes',getAllAnimes)
  const top_anime=data?data.data:[]
  return (
    <>
     {top_anime.map((anime)=>(
       <div className="max-w-[20rem] w-[20rem] max-h-[20rem] h-[20rem] bg-white" key={anime._id}>
       <img
         src={anime.image}
         alt="anime_image"
         className="h-[70%] w-[100%]"
       />
       <div className="my-3 mx-3">
         <p className="truncate max-w-md">Title: {anime.title}</p>
         <p>status: {anime.status}</p>
         <p>Ranking: {anime.ranking}</p>
       </div>
     </div>
     ))}
    </>
  );
};

export default Thumbnail;
