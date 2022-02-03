import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./singleCard.css";

export const SingleCard = ({ id, image, title ,type}) => {

  const [content, setContent] = useState("");

  return (
    <Link to={type ? `/movies/${title}` : `/series/${title}`} className="cardParent" id={id}  onClick={() => setContent(id)}>
      <img className="imglist"
        src={
          image
            ? "https://image.tmdb.org/t/p/w500/" + image
            : "https://live.staticflickr.com/2305/2112440233_408c905b49_c.jpg"
        }
        alt={"image of " + title}
        width={"250px"}
      />
      <h2 className="cardTitle">{title}</h2>
    </Link>
  );
};
