import { useCotizacion } from "../context/CotizacionContext";
import { generarPDF } from "../utils/generarPDF";

function Cotizacion() {
  const { items, total, numeroPedido } = useCotizacion();

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

      <p><strong>Número de pedido:</strong> {numeroPedido}</p>

      {items.length > 0 && (
        <button onClick={() => generarPDF(items, total, numeroPedido)}>
          Descargar cotización
        </button>
      )}
    </div>
  );
}

export default Cotizacion;
