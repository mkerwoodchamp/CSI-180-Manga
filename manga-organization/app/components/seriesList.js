import React, { useState } from 'react';
import axios from 'axios';

const MangaInfo = () => {
  const [mangaId, setMangaId] = useState('');
  const [mangaInfo, setMangaInfo] = useState(null);

  const handleChange = (event) => {
    setMangaId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://api.myanimelist.net/v2/manga/' + {mangaId} ,{
        headers: {
          Authorization: 'Bearer dcd6be7cec39f69648f7368b9328f468', 
        },
      });
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
          <input type="text" value={mangaId} onChange={handleChange} />
        </label>
        <button type="submit">Fetch Info</button>
      </form>
      {mangaInfo && (
        <div>
          <h3>{mangaInfo.data.attributes.title}</h3>
          <p>Description: {mangaInfo.data.attributes.synopsis}</p>
          <p>Volumes: {mangaInfo.data.attributes.volumeCount}</p>
        </div>
      )}
    </div>
  );
};

export default MangaInfo;