import { useCotizacion } from "../context/CotizacionContext";
import { generarPDF } from "../utils/generarPDF";


function Cotizacion() {
  const { items, total } = useCotizacion();

  return (
    <div>
      <h2>Cotización</h2>

      {items.length === 0 && <p>No hay productos</p>}

      {items.map(item => (
        <p key={item.producto.id}>
          {item.producto.nombre} — Cantidad: {item.cantidad}
        </p>
      ))}

      <h3>Total: ${total}</h3>
      <button onClick={() => generarPDF(items, total)}>
  Descargar cotización
</button>

    </div>
  );
}

export default Cotizacion;
