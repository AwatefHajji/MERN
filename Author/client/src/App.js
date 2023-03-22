
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";
function App() {
  return (
    <div className="container">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<NewAuthor/>}/>
        <Route path="/edit/:id" element={<EditAuthor/>}/>



      </Routes>
    
    </div>
  );
}

export default App;
