import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API  from '../../services/API';

export function MovieDetailsPage() {
    const [data, setData] = useState(null);
    const movieId = useParams().id;
    console.log(data)
    useEffect(() => {
        API.getMovieById(movieId).then(setData);
    }, [])
    
    return (data &&
        <>   
        <div>    
            <h2>{data.title}</h2>
            <p>Rating: {data.vote_average}</p>
            <h3>Overview</h3>
            <p>{data.overview}</p>
            <h3>Genres:</h3>
            <ul>
                {data.genres.map((data) => {
                    return <li>{data.name}</li>
                })}      
            </ul>
                {/* <img src={data.backdrop_path} alt="" /> */}
        </div>
        </>
    )
}