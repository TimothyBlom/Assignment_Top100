import React, {useState} from 'react';
import './App.css';

function App() {
  const [songs, setSongs] = useState(null);

  function fetchSongs() {
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(resp => resp.json())
      .then(data => {
        console.log(data.feed);
        setSongs(data.feed);
      })
  }

  return (
    <div className="App">

      <header>
        Top 100 Songs on ITunes
      </header>

      <button onClick={fetchSongs}>get data</button>

      <div className='songList'>
        <div className='song'>
          <h3>song title: </h3>
          <h3>author: </h3>
          <h3>entry: </h3>
        </div>
      </div>

    </div>
  );
}

export default App;