import React from "react";


export const SingleCard = ({id,image,title})=>{

    return(
        <div id={id}>
            <img src={'https://image.tmdb.org/t/p/w500/'+image} alt={'image of '+title} />
            <h2>{title}</h2>
        </div>
    )
}