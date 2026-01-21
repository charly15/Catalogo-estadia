import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoList from "./components/ProductoList";
import ProductoDetalle from "./components/ProductoDetalle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductoList />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
