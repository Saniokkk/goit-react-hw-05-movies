import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';

import { getTrendingMovies } from './services/fetchMovie-api';

function App() {
  const [data, setData] = useState([]);
  console.log(data)
  useEffect(() => {
      getTrendingMovies().then( data =>setData(data.results))      
  },[])
  return (
    <div className="App">
      <Routes>        
          <Route path='/' element={<HomePage data={data} />}/>      
          <Route path='/movies/:id' element={<HomePage data={data} />}/>      
      </Routes>
    </div>
  )
} 

export default App;
