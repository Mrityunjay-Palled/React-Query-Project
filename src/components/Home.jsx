import React,{useState}from "react";
import Navbar from "./Navbar";
import TopAnime from "./TopAnime";
const Home = () => {
  const [anime,setAnime]=useState("")
  return (
    <div>
      <Navbar setAnime={setAnime} />
      <TopAnime anime={anime}/>
    </div>
  );
};

export default Home;
