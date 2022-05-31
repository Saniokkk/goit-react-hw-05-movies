import { Link, useNavigate, Outlet } from "react-router-dom";
import { Navigation } from "../Navigation";
import styles from './HomePage.module.css';

export function HomePage({ data }) {
    console.log(data)
    const link = useNavigate();
    console.log(link);
    return (
        <>
        <Navigation />
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
