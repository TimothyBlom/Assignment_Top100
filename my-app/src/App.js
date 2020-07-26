import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState({ entry: [] });

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        setSongs(response.data.feed);
        console.log(response.data.feed);
    };

    fetchSongs();

  }, [] );

  return (
    <div>

      <header  className="topItunesHeader">
        Top 100 Songs on ITunes
      </header>

      <ul className='songList'>
        {songs.entry.map(item => (
          <li className='song' key={item.id.label}> {item.title.label} </li>
        ))}
      </ul>

    </div>
  );
}

export default App;