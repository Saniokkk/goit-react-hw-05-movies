import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "e095a1290a6e5cce004c0f0ac9fc4656"

export async function getTrendingMovies() {
    const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    return response.data
}

// export async function search