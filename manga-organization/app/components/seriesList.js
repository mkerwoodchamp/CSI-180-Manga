import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Series from './series.js';
import './seriesList.css'

const MangaInfo = () => {
  const [mangaId, setMangaId] = useState('');
  const [mangaSeries, setMangaSeries] = useState([]);

  useEffect (() => {
    const storedSeries = localStorage.getItem('mangaSeries');
    if (storedSeries) {
      setMangaSeries(JSON.parse(storedSeries));
    }
  }, []);

  const handleChange = (event) => {
    setMangaId(event.target.value);
  };

  const removeSeries = (id) => {
    const updateSeries = mangaSeries.filter((series) => series.data.mal_id!== id);
    setMangaSeries(updateSeries);
    localStorage.setItem('mangaSeries', JSON.stringify(updateSeries));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/manga/${mangaId}/full`);
      const newSeries = response.data;
      setMangaSeries(prevSeries => [...prevSeries, newSeries]); 
      setMangaId('');
      localStorage.setItem('mangaSeries', JSON.stringify([...mangaSeries, newSeries]));
    } catch (error) {
      console.error('Error fetching manga information:', error);
    }
  };

  return (
    <div>
      <h2>Fetch Manga Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Manga ID:
          <input className="search" type="text" value={mangaId} onChange={handleChange} />
        </label>
        <button className="fetch" type="submit">Fetch Info</button>
      </form>
      {mangaSeries.map(series=> (
        <Series
        key={series.data.mal_id}
        title={series.data.title}
        synopsis={series.data.synopsis}
        volumes={series.data.volumes}
        onRemove={() => removeSeries(series.data.mal_id)}
        />
      ))}
    </div>
  );
};

export default MangaInfo;