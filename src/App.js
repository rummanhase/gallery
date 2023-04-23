import { useEffect, useState } from "react";
import "./App.css";
import Jumbutron from "./component/Jumbutron";
import SearchBar from "./component/SearchBar";
import Photoes from "./component/Photoes";

function App() {
  function fetchFlickrData(apiKey, searchText, callback) {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&format=json&nojsoncallback=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.stat === "ok") {
          const photos = data.photos.photo.map((photo) => ({
            id: photo.id,
            title: photo.title,
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          }));
          callback(null, photos);
        } else {
          callback(new Error(data.message), null);
        }
      })
      .catch((error) => {
        callback(error, null);
      });
  }
  const apiKey = "e005d12081626241211a1d27ce3055ad";
  const searchText = "cricket";

  const [data, setData] = useState([]);
  useEffect(
    () =>
      fetchFlickrData(apiKey, searchText, (error, photos) => {
        if (error) {
          console.error(error);
        } else {
          setData(photos);
          console.log(photos);
        }
      }),
    []
  );

  return (
    <div className='App'>
      <SearchBar />
      <Photoes />
      <Jumbutron />
      React The sun shone brightly over the rolling hills as Sarah made her way
      down the winding path. She had been walking for hours, lost in thought and
      enjoying the peacefulness of nature. As she rounded a bend, she saw a
      small cottage nestled in a clearing, smoke curling from the chimney.
      Curiosity piqued, she quickened her pace and approached the door. It
      creaked open with a gentle push, revealing a cozy interior filled with
      flickering candlelight. An old woman sat in a rocking chair by the fire, a
      warm smile spreading across her wrinkled face as Sarah stepped inside.
    </div>
  );
}

export default App;
