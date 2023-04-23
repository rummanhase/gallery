import React, { useContext } from "react";
import { UserContext } from "./ContextApi";
import "../App.css";

export default function Photoes() {
  const data = useContext(UserContext);

  return (
    <div className='gallery'>
      Photoes
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
