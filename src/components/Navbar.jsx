import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = ({setAnime}) => {
  const [input, setInput] = useState("");
  const handleInputChange=(event)=>{
    setInput(event.target.value)
  }
  const handleSearch=()=>{
    setAnime(input)
  }
  return (
    <nav className="flex m-5 justify-center">
      <div className="flex items-center">
        <p className="mx-3 sm:mx-5 sm:text-lg text-[12px] whitespace-nowrap font-orbitron font-bold">
          Anime World
        </p>
        <input
          className="border-2 focus:outline-none placeholder:font-orbitron"
          type="text"
          placeholder="Search....."
          onChange={handleInputChange}
        />
        <button className="border-2 w-14 p-1 text-center" onClick={handleSearch}>
          <AiOutlineSearch className="ml-[15px]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
