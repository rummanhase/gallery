import React, { useState } from "react";
import "../App.css";

export default function SearchBar({ onTextChange }) {
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
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
