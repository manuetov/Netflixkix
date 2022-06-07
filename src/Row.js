import React, {useState, useEffect} from 'react'
import axios from './axios';
import './css/Row.css'
import YouTube from 'react-youtube';
const movieTrailer = require( 'movie-trailer' ) 

const img_URL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(""); 

    // hooks run basado en una condición especifica.
    useEffect (() => {
        async function fetchData() {
            // si [], run una vez cuando la Filas loads y no run again
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters/
            autoplay: 1,
        },
    };

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            await movieTrailer(movie?.name || "")
                .the((url) => {
                    // https://www.youtube.com/watch?v=JxYcyWDWsyU
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }

    }

  return (
    <div>
        {/* title */}
        <h2>{title}</h2>

        {/* container posters */}
        <div className="rows_posters">
            {movies.map(movie =>(
                <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)} // click en la imagen pasa movie
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${img_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
            ))} 
        </div> 
         {/* cuando tenga el trailerUrl se muestra el video */}
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}   
         {/* <YouTube videoId='gRdF4mbJ4Vo' opts={opts}/>        */}
    </div>
  )
}

export default Row;