import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { MovieDetailsPage } from './components/MovieDetailsPage';
import { Navigation } from './components/Navigation';
import { MoviesPage } from './components/MoviesPage';
import { Reviews } from './components/Reviews';
import { Cast } from './components/Cast';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>        
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage /> } />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='/movies/:movieId/cast' element={<Cast /> } />
          <Route path='/movies/:movieId/reviews' element={<Reviews /> } />
        </Route>
      </Routes>
    </div>
  )
} 

export default App;
