import React, { useContext, useEffect } from "react";
import { UserContext } from "./ContextApi";
import "../App.css";

export default function Photoes({myWord}) {
  const { data, setSearchText , searchText } = useContext(UserContext);
  useEffect(()=>{
    setSearchText(myWord)
  } , [myWord])
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }
  return (
    <div className='gallery'>
      <span>the photoes are for {searchText?searchText:"Cricket"}</span>
      <div className='my-photos'>
        {data.map((a, b) => (
          <div className='my-photo' key={a.id}>
            <img className='image image-cover' src={a.url} alt={a.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
