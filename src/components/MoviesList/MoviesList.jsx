import styles from './MoviesList.module.css';

export function MoviesList({children}) {
    return (<ul className={styles.movieList}>{children}</ul>)
}

