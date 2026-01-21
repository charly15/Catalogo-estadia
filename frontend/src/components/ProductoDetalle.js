import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/productos/${id}/`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>

      {producto.imagen && (
        <img src={producto.imagen} alt={producto.nombre} width="300" />
      )}

      <p><strong>Marca:</strong> {producto.marca}</p>
      <p><strong>Modelo:</strong> {producto.modelo}</p>
      <p><strong>Categoría:</strong> {producto.categoria.nombre}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>

      <p>{producto.descripcion_larga}</p>

      <button>
  Agregar a cotización
</button>
    </div>
  );
}

export default ProductoDetalle;
