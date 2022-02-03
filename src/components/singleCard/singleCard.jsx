import React from "react";
import "./singleCard.css";

export const SingleCard = ({id,image,title})=>{

    return(
        <div className="cardParent" id={id}>
            <img src={image ? 'https://image.tmdb.org/t/p/w500/'+image : 'https://live.staticflickr.com/2305/2112440233_408c905b49_c.jpg'} alt={'image of '+title} width={'250px'} />
            <h2 className="cardTitle">{title}</h2>
        </div>
    )
}