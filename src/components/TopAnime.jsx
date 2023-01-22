import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Thumbnail from "./Thumbnail";
const TopAnime = (props) => {
  const [render, setRender] = useState(false);
  const parameters = {
    page: "1",
    size: "40",
    sortBy: "ranking",
    sortOrder: "asc",
    search: props.anime,
  };

  useEffect(()=>{
     setRender(true)
  },[parameters?.search])

  return (
    <main>
      <p className="font-orbitron font-bold text-sm mx-5 text-center custombp:text-left sm:text-xl xr:text-center pro:text-center ">
        Showing Top Animes
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 se:grid-cols-2 mini:grid-cols-3 su:grid-cols-4 gap-6 my-5 justify-items-center">
        {render?<Thumbnail parameters={parameters} />:"not renderd"}
      </div>
    </main>
  );
};

export default TopAnime;
