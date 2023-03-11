import React, { useState } from 'react'
import './App.css';
import ColorForm from './components/ColorForm';
import DisplayColor from './components/DisplayColor';
function App() {
  const [colors, setColor] = useState([])
  return (
    <div className="App">
<ColorForm colors={colors} setColorsFunction={setColor}/>
<DisplayColor colors={colors}/>
    </div>
  );
}

export default App;
