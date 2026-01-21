import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoList from "./components/ProductoList";
import ProductoDetalle from "./components/ProductoDetalle";
import Cotizacion from "./pages/Cotizacion";


function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<ProductoList />} />
  <Route path="/producto/:id" element={<ProductoDetalle />} />
  <Route path="/cotizacion" element={<Cotizacion />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
