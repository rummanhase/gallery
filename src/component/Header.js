import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";

export default function Header() {
  return (
    <div className='my-header'>
      Header
      <SearchBar />
      <button className='btn'>Search</button>
    </div>
  );
}
