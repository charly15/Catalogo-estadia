import { createContext, useContext, useState } from "react";

const CotizacionContext = createContext();

function generarNumeroPedido() {
  const fecha = new Date();
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);

  return `COT-${y}${m}${d}-${random}`;
}

export function CotizacionProvider({ children }) {
  const [items, setItems] = useState([]);
  const [numeroPedido] = useState(generarNumeroPedido());

  const agregarProducto = (producto) => {
    setItems(prev => {
      const existente = prev.find(i => i.producto.id === producto.id);

      if (existente) {
        return prev.map(i =>
          i.producto.id === producto.id
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        );
      }

      return [...prev, { producto, cantidad: 1 }];
    });
  };

  const total = items.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  return (
    <CotizacionContext.Provider
      value={{ items, agregarProducto, total, numeroPedido }}
    >
      {children}
    </CotizacionContext.Provider>
  );
}

export const useCotizacion = () => useContext(CotizacionContext);
