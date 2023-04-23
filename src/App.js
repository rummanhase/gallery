import "./App.css";
import Photoes from "./component/Photoes";
import Header from "./component/Header";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [myWord, setMyWord] = useState("Boy");
  const handleWord = (word) => {
    setMyWord(word);
    // console.log(search);
  };
  return (
    <div className='App'>
      <Header handleWord={handleWord} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Photoes myWord={myWord} />} />
          <Route path='/football' element={<Photoes myWord='football' />} />
          <Route path='/mountains' element={<Photoes myWord='mountains' />} />
          <Route path='/cars' element={<Photoes myWord='cars' />} />
          <Route path='/got' element={<Photoes myWord='games of thrones' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
