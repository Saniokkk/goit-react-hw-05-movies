import { Link, useLocation } from "react-router-dom";

export function BackBtn() {
    const { state } = useLocation();
    return <Link to={state ? state : '/'}>Go back</Link>
}