import React, { useContext, useState } from "react";
import "../App.css";
import { UserContext } from "./ContextApi";
export default function SearchBar({ onTextChange }) {
  const { searchText } = useContext(UserContext);
  const [, setText] = useState("");
  const handleChange = (e) => {
    const newWord = e.target.value;
    setText(newWord);
    onTextChange(newWord);
    // console.log(newWord);
  };
  return (
    <div>
      <input
        type='text'
        name=''
        id=''
        className='search-box'
        placeholder='Search for images'
        // value={searchText}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
