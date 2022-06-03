import { Link, useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import {getTrendingMovies} from "../../services/API"

export function HomePage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getTrendingMovies().then( data =>setData(data.results))      
    }, [])   

    const url = useNavigate();
    console.log(url);
    return (
        <>        
        <h2>Trending today</h2>
        <ul>
            {data.map(({id, original_title, }) => {
                return (<li key={id} className={styles.trendsItem}>
                            <Link to={`/movies/${id}`}>{original_title}</Link>
                        </li>)
            })}
            <Outlet />
        </ul>
        </>
    )
}
