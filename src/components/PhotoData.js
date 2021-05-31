import React from "react";
import styled from 'styled-components';

export default function PhotoData(props) {
    const {astroPhotoData} = props

    const PhotoDataDiv = styled.div`
        background: #191970;
        color: #B0E0E6;
        max-height: 300px;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    `;

    return (
        <PhotoDataDiv>
            <h1>{astroPhotoData.title}</h1>
            <p>{astroPhotoData.date}</p>
            <p>{astroPhotoData.copyright}</p>
            <p>{astroPhotoData.explanation}</p>
        </PhotoDataDiv> 
    )
        
}