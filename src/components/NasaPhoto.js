import React,  {useEffect, useState} from 'react';
import axios from 'axios';

export default function NasaPhoto() {
    const [astroPhoto, setAstroPhoto] = useState('');
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
                  <div className='photoData'>
                      <h1>{astroPhoto.title}</h1>
                      <p>{astroPhoto.date}</p>
                      <p>{astroPhoto.explanation}</p>
                  </div>
                    
            </div>
        </>
    )
}