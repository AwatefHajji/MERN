import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Search from './components/Search';
import Display from './components/Display';
import Error from './components/Error';


function App() {
  
  return (
    <div className="App">
      <Search />
      <Routes>
     
      <Route path="/:choose/:id" element={<Display />} />
      <Route path="/error" element={<Error />} />
      
      </Routes>
    </div>
  );
}

export default App;
