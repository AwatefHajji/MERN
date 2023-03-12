import { useState } from 'react'
import './App.css';
import Tabs from './components/Tabs';
function App() {
  const [tabs, setTabs] =useState ( [
    {label: "Tab 1", content: "This is the content of tab 1"},
    {label: "Tab 2", content: "This is the content of tab 2"},
    {label: "Tab 3", content: "This is the content of tab 3"}
  ])
  return (
    <div className="App">
<Tabs tabs ={tabs} setTabs ={setTabs}/>

    </div>
  );
}

export default App;
