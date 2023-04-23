import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header({ handleWord }) {
  const [search, setSearch] = useState("");
  const getWord = (word) => {
    setSearch(word);
    handleWord(word);
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
      <div>
        <ul>
          <li>
            <Link to='/football'>Football</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
