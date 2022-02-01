import react, { useState, useEffect } from "react";
import axios from "axios";
import { SingleCard } from "../singleCard/singleCard";

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState("");

  const getApi = async () => {
    const x = await axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=796a07afc61576ce6051fda905a73814&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => setErr(err.message));
  };

  useState(async () => {
    getApi();
  }, []);

  return (
    <div>
      {err ? <p>{err}</p> : null}
      {movies.map((key) => {
        return (
          <SingleCard id={key.id} image={key.poster_path} title={key.title} />
        );
      })}
    </div>
  );
};
