import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
// import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:numb/:bcolor/:color" element={<Number />} />
        {/* <Route path="/hello" element={<Hello />} /> */}
      </Routes>

    </div>
  );
}

export default App;
