import React from "react";

export default function PhotoData(props) {
    const {astroPhotoData} = props

    return (
        <div className='photoData'>
            <h1>{astroPhotoData.title}</h1>
            <p>{astroPhotoData.date}</p>
            <p>{astroPhotoData.explanation}</p>
        </div> 
    )
        
}