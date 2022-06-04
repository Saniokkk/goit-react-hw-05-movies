import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams} from "react-router-dom";
import * as API from '../../services/API';
import styles from './MoviesPage.module.css';

export function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const {pathname, search} = useLocation()
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState(null);
    const [data, setData] = useState(null);
    const currenUrl = `${pathname}${search}`;

    const handleChange = (event) => {
        setInputValue(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchValue(inputValue);
        setSearchParams({ query: inputValue });
        setInputValue('')
    }

    useEffect(() => {
        if (searchValue) {
            API.getSearchMovies(searchValue).then((response) => setData(response.results));
        }
    }, [searchValue]);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" value={inputValue} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
            {data &&               
            <ul className={styles.filmsList}>
                {data.map((data) => {
                    return <li key={data.id}><Link to={`/movies/${data.id}`} state={currenUrl}>{data.title}</Link></li>
                    
                })} 
            </ul> 
        }

        </>                
    )
}