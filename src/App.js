import { useEffect, useState } from "react";
import "./App.css";

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
      React
      {data.map((a, b) => (
        <div key={a.id}>
          <img src={a.url} alt={a.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
