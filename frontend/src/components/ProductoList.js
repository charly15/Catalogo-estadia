import { useEffect, useState } from "react";
import { getProductos } from "../services/api";
import { Link } from "react-router-dom";
import CategoriaTree from "./CategoriaTree";


function ProductoList() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getProductos().then(data => setProductos(data));
  }, []);

  const productosFiltrados = productos.filter(producto => {
    const coincideCategoria = categoriaSeleccionada
      ? producto.categoria.id === categoriaSeleccionada
      : true;

    const texto = busqueda.toLowerCase();
    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(texto) ||
      producto.descripcion_corta.toLowerCase().includes(texto);

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div style={{ display: "flex" }}>
      {/* CATEGORÍAS */}
      <CategoriaTree onSelect={setCategoriaSeleccionada} />


      {/* CONTENIDO */}
      <div style={{ flex: 1 }}>
        <h1>Catálogo de productos</h1>

        {/* BARRA DE BÚSQUEDA */}
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          style={{
            width: "100%",
            padding: 8,
            marginBottom: 20,
            fontSize: 16
          }}
        />
<Link to="/cotizacion">
  <button>Ver cotización</button>
</Link>

        {productosFiltrados.map(producto => (
          <div
            key={producto.id}
            style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
          >
            {producto.imagen && (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{ width: "150px", display: "block", marginBottom: 10 }}
              />
            )}

            <h3>
              <Link to={`/producto/${producto.id}`}>
                {producto.nombre}
              </Link>
            </h3>

            <p>{producto.descripcion_corta}</p>

            {producto.categoria && (
              <p>
                <strong>Categoría:</strong> {producto.categoria.nombre}
              </p>
            )}

            <strong>${producto.precio}</strong>
            <p>Stock: {producto.stock}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default ProductoList;
