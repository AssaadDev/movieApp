import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./singcomp.css";

export function SingleContent({ type }) {
  const { title } = useParams(); //?????????????????    {id}    ??????????????????
  const [info, setInfo] = useState();
  const [err, setErr] = useState("");
  const [bc, setbc] = useState("");

  async function getApiInfo() {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/${
          type ? "movie" : "tv"
        }?api_key=796a07afc61576ce6051fda905a73814&query=${title}`
      )
      .then((res) => {
        setInfo(res.data.results[0]);
        setbc(
          "https://image.tmdb.org/t/p/w500/" + res.data.results[0].backdrop_path
        );
      })
      .catch((err) => setErr(err.message));
  }

  useEffect(() => {
    getApiInfo();
  }, [title]);
  console.log(info);
  return (
    <>
      {err ? <p>{err}</p> : null}

      {info ? (
        <div
          className="backgrnd"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bc})`,
          }}
        >
          <div className="flexFirst">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + info.poster_path}
              alt={"image of " + info.title}
            />
            <h2 className="titlecss">{type ? info.title : info.name}</h2>
          </div>
          <div className="flexSecond">
            <p className="desc">{info.overview}</p>
            <button className="optional">Watch</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
