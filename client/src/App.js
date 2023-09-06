import './App.css';
import React, { useState, useEffect } from 'react';
import SongTable from './components/SongTable';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/songs/ordered')
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='table-title'>Song List</h1>
      <SongTable songs={songs} />
    </div>
  );
}

export default App;


