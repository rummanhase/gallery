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
      
      {window.location.pathname === '/' && <SearchBar onTextChange={getWord} />}
      </div>
      <div className='my-search'>
        <ul>
        {window.location.pathname !== '/' && 
        <li>
          
          <Link to='/'>Home</Link>
        </li>}
        {window.location.pathname !== '/mountains' && <li>
          <Link to='/mountains'>Mountains</Link>
          </li>}
          {window.location.pathname !== '/beaches' && <li>
            <Link to='/beaches'>Beaches</Link>
          </li>}{window.location.pathname !== '/birds' && <li>
            <Link to='/birds'>Birds</Link>
          </li>}{window.location.pathname !== '/food' && 
          <li>
            <Link to='/food'>Food</Link>
          </li>}
          
          
         
        </ul>
    </div>
    </>
  );
}
