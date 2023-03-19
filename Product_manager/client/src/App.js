import './App.css';
import ProductComponent from './components/ProductComponent';
import DetailProduct from './components/DetailProduct';
import { Routes, Route } from'react-router-dom';
function App() {

  return (
    
    <div className="App">
      <Routes>
      <Route element={<ProductComponent />} path="/" />
        <Route element={<DetailProduct />} path="/product/:id" />
      </Routes>
    </div>
  );
}

export default App;
