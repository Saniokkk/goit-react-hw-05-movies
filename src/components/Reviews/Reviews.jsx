import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { imageDefaultLink } from '../../services/imageDefaultLink';
import * as API from '../../services/API';
import styles from './Reviews.module.css';


export function Reviews() {
    const [data, setData] = useState(null);
    const movieId = useParams().movieId;

    useEffect(() => {
        API.getReviewsById(movieId).then(setData);
    }, [movieId])
    
    console.log(data)

    // data.results === [] ? 
    return ( data &&
        <ul className={styles.cardList}>
            {data.results.map(({ id, author, content, author_details: { avatar_path: avatar } }) => {
                console.log(avatar.slice(1,6))
                return <li key={id}>
                            <div className={styles.cardCast}>
                                <img className={styles.avatar} src={avatar.slice(1, 6) === "https"
                                    ? avatar.slice(1, avatar.length)
                                    : `${imageDefaultLink}${avatar}`}
                                    alt={author} />
                                <h3>{author}</h3>
                                <p>{content}</p>
                            </div>
                        </li>
            })}
        </ul>
        )
}