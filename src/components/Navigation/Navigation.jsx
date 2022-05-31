import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
    return (
        <>
            <nav className={styles.navigation}>
                <NavLink to='/' className={styles.navLink}>Home</NavLink>
                <NavLink to='/movies' className={styles.navLink}>Movies</NavLink>
            </nav>
            <hr style={{ boxShadow: "0px 3px 10px 1px var(--brand-color)", width: "90%" }}></hr>            
        </>
    )
}  
