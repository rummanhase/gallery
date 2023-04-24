import "./App.css";
import Photoes from "./component/Photoes";
import Header from "./component/Header";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [myWord, setMyWord] = useState("");
  const handleWord = (word) => {
    setMyWord(word);
    // console.log(search);
  };
  return (
    <div className='App'>
      
      <BrowserRouter>
      <Header handleWord={handleWord} />
        <Routes>
          <Route path='/' element={<Photoes myWord='cricket' />} />
          <Route path='/beaches' element={<Photoes myWord='beaches' />} />
          <Route path='/mountains' element={<Photoes myWord='mountains' />} />
          <Route path='/birds' element={<Photoes myWord='birds' />} />
          <Route path='/food' element={<Photoes myWord='food' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
