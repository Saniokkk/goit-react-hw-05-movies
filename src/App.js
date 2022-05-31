import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { MovieDetailsPage } from './components/MovieDetailsPage';

function App() {

  return (
    <div className="App">
      <Routes>        
          <Route path='/' element={<HomePage  />}/>      
          <Route path='/movies/:id' element={<MovieDetailsPage  />}/>      
      </Routes>
    </div>
  )
} 

export default App;
