import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import { getTrendingMovies } from "../../services/API";
import { imageDefaultLink } from '../../services/imageDefaultLink';
import placeholderImage from '../../placeholder.png';

console.log(placeholderImage)

export function HomePage() {
    const [data, setData] = useState([]);
    const {pathname, search} = useLocation()
    const currenUrl = `${pathname}${search}`;

    useEffect(() => {
        getTrendingMovies().then( data =>setData(data.results))      
    }, [])   

    const url = useNavigate();
    console.log(url);
    return (
        <>        
        <h2>Trending today</h2>
        <ul className={styles.trendsList}>
            {data.map(({id, original_title, poster_path, vote_average }) => {
                return (<li key={id} className={styles.trendsItem}>
                    <Link to={`/movies/${id}`} state={currenUrl}>
                        <img src={`${imageDefaultLink}${poster_path}`} alt={original_title} />
                        <h3>{original_title}</h3>
                    </Link>
                        </li>)
            })}
            <Outlet />
        </ul>
        </>
    )
}
