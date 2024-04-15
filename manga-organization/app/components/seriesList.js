import React, { useState } from 'react';
import axios from 'axios';
import Series from './series.js';
import './seriesList.css'

const MangaInfo = () => {
  const [mangaId, setMangaId] = useState('');
  const [mangaInfo, setMangaInfo] = useState(null);

  const handleChange = (event) => {
    setMangaId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/manga/${mangaId}/full`);
      setMangaInfo(response.data);
    } catch (error) {
      console.error('Error fetching manga information:', error);
    }
  };

  return (
    <div>
      <h2>Fetch Manga Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Manga ID:
          <input className="search" type="text" value={mangaId} onChange={handleChange} />
        </label>
        <button type="submit">Fetch Info</button>
      </form>
      {mangaInfo && <Series title={mangaInfo.data.title} synopsis={mangaInfo.data.synopsis} volumes={mangaInfo.data.volumes} />}
    </div>
  );
};

export default MangaInfo;