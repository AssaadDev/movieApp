import React, { useState, useEffect } from "react";
import axios from "axios";
import { SingleCard } from "../singleCard/singleCard";
import "./../content.css";

export function Movie({ search, _id }) {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState("");
  const [control, setControl] = useState("");

  useEffect(() => {
    if (search.length >= 3) {
      setControl(search);
    }else{
      setControl('');
    }
    //console.log('done')
  }, [search]);

  const getApi = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=796a07afc61576ce6051fda905a73814&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
        //console.log(res.data.results)
      })
      .catch((err) => setErr(err.message));
  };

  async function getApiSrch() {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=796a07afc61576ce6051fda905a73814&query=${search}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => setErr(err.message));
  }

  useEffect(() => {
    if (search.length >= 3) {
      getApiSrch();
      //console.log("search activated");
      setErr('No match');
    } else {
      getApi();
      //console.log("default");
    }
  }, [control]);

  return (
    <div className="list-of-content" id={_id}>
      {movies == 0 ? <p className="errMsg">{err}</p> : null}
      {movies.map((key) => {
        return (
          <SingleCard id={key.id} image={key.poster_path} title={key.title} />
        );
      })}
    </div>
  );
}
