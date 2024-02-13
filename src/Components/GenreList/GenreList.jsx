import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const GenreList = () => {
  const [genreData, setGenreData] = useState([]);

  const getData = async () => {
    const url = "http://localhost:3000/genre";
    const response = await axios.get(url);
    // console.log(response)
    setGenreData(response.data);
  };

  useEffect(() => {

    getData();
  }, [setGenreData]);

  return (
    <nav>
      <ul>
        {genreData && genreData.map(genre => {
          return (
            <li key={genre.id}>
              <NavLink key={genre.id} to={`${genre.slug}`}>{genre.title}</NavLink>
            </li>
          )
        })}

      </ul>
    </nav>
  );
};

