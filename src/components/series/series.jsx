import React, { useState, useEffect } from "react";
import axios from "axios";
import { SingleCard } from "../singleCard/singleCard";

export const Series = ({ search, _id }) => {
  const [series, setSeries] = useState([]);
  const [err, setErr] = useState("");
  const [control, setControl] = useState("");

  useEffect(() => {
    if (search.length >= 3) {
      setControl(search);
    }else{
      setControl('');
    }
  }, [search]);

  const getApi = async () => {
     await axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=796a07afc61576ce6051fda905a73814&language=en-US&page=1"
      )
      .then((res) => {
        setSeries(res.data.results);
      })
      .catch((err) => setErr(err.message));
  };
  async function getApiSrch() {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=796a07afc61576ce6051fda905a73814&query=${search}`
      )
      .then((res) => {
        setSeries(res.data.results);
      })
      .catch((err) => setErr(err.message));
  }

  useEffect(() => {
    if (search.length >= 3) {
      getApiSrch();
      //console.log("search activated");
    } else {
      getApi();
      //console.log("default");
    }
  }, [control]);

  return (
    <div className="list-of-content" id={_id}>
      {err ? <p>{err}</p> : null}
      {series.map((key) => {
        return (
          <SingleCard id={key.id} image={key.poster_path} title={key.name} />
        );
      })}
    </div>
  );
};
