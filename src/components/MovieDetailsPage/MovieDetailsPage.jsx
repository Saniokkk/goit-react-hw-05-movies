import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { imageDefaultLink } from "services/imageDefaultLink";
import * as API from '../../services/API';
import styles from './MovieDetailsPage.module.css';

export function MovieDetailsPage() {
    const [data, setData] = useState(null);
    const movieId = useParams().movieId;
    console.log(data)
    useEffect(() => {
        API.getMovieById(movieId).then(setData);
    }, [movieId])
    
    return (data &&
        <>   
        <div className={styles.movieDetails}>
            <div>
                <img className={styles.img} src={`${imageDefaultLink}${data.poster_path}`} alt="" />
            </div>
            <div className={styles.descMovie}>
                <h2>{data.title}</h2>
                <p>Rating: {data.vote_average}</p>
                <h3>Overview</h3>
                <p>{data.overview}</p>
                <h3>Genres:</h3>
                <ul>
                    {data.genres.map((data) => {
                        return <li key={data.id}>{data.name}</li>
                    })}      
                </ul>
            </div>
        </div>
        <div className={styles.reviews}>
            <Link to={`/movies/${data.id}/cast`}>Cast</Link>
            <Link to={`/movies/${data.id}/reviews`}>Reviews</Link>
        </div>
        <Outlet />
        </>
    )
}