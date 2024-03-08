import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {
    const [manga, setManga] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchManga = async () => {
            try {
                const response= await axios.get('https://api.jikan.moe/v4/anime?q=berserk&sfw');
                console.log(response.data.results);
                if (isMounted){
                    setManga(response.data.results);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchManga();

        return () => { 
            isMounted = false; 
        };
    }, []);

    return(
        <div>
            <h1>Manga List</h1>
            <ul>
                {manga.map(manga => (
                    <li key={manga.mal_id}>{manga.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;