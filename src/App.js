import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { MovieDetailsPage } from './components/MovieDetailsPage';
import { Navigation } from './components/Navigation';
import { MoviesPage } from './components/MoviesPage';
import { Reviews } from './components/Reviews';
import { Cast } from './components/Cast';


function App() {
  const ulrState = useLocation();
  console.log(ulrState);
  return (
    <div className="App">
      <Navigation />
      <Routes>        
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage /> } />
        <Route path='/movies/:movieId' element={<MovieDetailsPage state={ulrState.pathname} />} >
          <Route path='/movies/:movieId/cast' element={<Cast /> } />
          <Route path='/movies/:movieId/reviews' element={<Reviews /> } />
        </Route>
        <Route path="*" element={<HomePage to="/" replace />} />
      </Routes>
    </div>
  )
} 

export default App;
