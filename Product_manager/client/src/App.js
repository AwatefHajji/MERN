import './App.css';
import ProductComponent from './components/ProductComponent';
import DetailProduct from './components/DetailProduct';
import EditProduct from './components/EditProduct';
import { Routes, Route } from'react-router-dom';
function App() {

  return (
    
    <div className="App">
      <Routes>
      <Route element={<ProductComponent />} path="/" />
        <Route element={<DetailProduct />} path="/product/:id" />
        <Route element={<EditProduct />} path="/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
