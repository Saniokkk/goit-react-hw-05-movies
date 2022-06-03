import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import * as API from '../../services/API';
import styles from './MoviesPage.module.css';

export function MoviesPage() {
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState(null);
    const [data, setData] = useState(null);

    const handleChange = (event) => {
        setInputValue(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(inputValue);
        setInputValue('')
    }

    useEffect(() => {
        if (search) {
            API.getSearchMovies(search).then((response) => setData(response.results));
        }
    }, [search]);

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" value={inputValue} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
            {data &&               
            <ul className={styles.filmsList}>
                {data.map((data) => {
                    return <li key={data.id}><Link to={`/movies/${data.id}`}>{data.title}</Link></li>
                    
                })} 
            </ul> 
        }

        </>                
    )
}