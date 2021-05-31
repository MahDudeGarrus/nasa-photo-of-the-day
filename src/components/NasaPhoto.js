import React,  {useEffect, useState} from 'react';
import axios from 'axios';
import PhotoData from './PhotoData';

export default function NasaPhoto(props) {
    const [astroPhoto, setAstroPhoto] = useState('');
    console.log(astroPhoto)
    useEffect(() => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=kwMJiPpGwdPcduB02L77mnyPuogEFciL96wYQiSf")
          .then(res => setAstroPhoto(res.data))
          .catch(err => console.log(err))
    },[])

    if (!astroPhoto) return <div />

    return (
        <> 
            <div className='mediaDisplay'>
              {astroPhoto.media_type === "image" ? (
                <img src={astroPhoto.url} alt={astroPhoto.title}/>
                ) : (
                    <iframe
                    title="space-video"
                    src={astroPhoto.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                    />
                )}
            <PhotoData key={astroPhoto.date} astroPhotoData={astroPhoto} />      
            </div>
        </>
    )
}