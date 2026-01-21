import { createContext, useContext, useState } from "react";

const CotizacionContext = createContext();

export function CotizacionProvider({ children }) {
  const [items, setItems] = useState([]);

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
    <CotizacionContext.Provider value={{ items, agregarProducto, total }}>
      {children}
    </CotizacionContext.Provider>
  );
}

export const useCotizacion = () => useContext(CotizacionContext);
