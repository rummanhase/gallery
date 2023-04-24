import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import { Link } from "react-router-dom";
import { UserContext } from "./ContextApi";

export default function Header({ handleWord }) {
  const [search, setSearch] = useState("");
  const { data, setSearchText } = useContext(UserContext);
  const getWord = (word) => {
    setSearch(word);
    handleWord(word);
    setSearchText(word)
    // console.log(search);
  };
  const searchButton = () => {
    console.log(search);
  };
  return (
    <>
    <div className='my-search'>
      Header
      
      {window.location.pathname === '/' && <SearchBar onTextChange={getWord} />}
      </div>
      <div className='my-search'>
        <ul>
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/football'>Football</Link>
          </li>
          <li>
            <Link to='/mountains'>Mountains</Link>
          </li>
          <li>
            <Link to='/cars'>Cars</Link>
          </li>
          <li>
            <Link to='/got'>GOT</Link>
          </li>
        </ul>
    </div>
    </>
  );
}
