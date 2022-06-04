import { Link, useLocation } from "react-router-dom";

export function BackBtn() {
    const { state } = useLocation();
    // console.log(useLocation())
    console.log(state)
    return <Link to=''>Go back</Link>
}