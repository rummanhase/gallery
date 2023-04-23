import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../App.css";

export default function Header() {
  const [search, setSearch] = useState("");
  const getWord = (word) => {
    setSearch(word);
    // console.log(search);
  };
  const searchButton = () => {
    console.log(search);
  };
  return (
    <div className='my-header'>
      Header
      <SearchBar onTextChange={getWord} />
      <button className='btn' onClick={searchButton}>
        Search
      </button>
    </div>
  );
}
