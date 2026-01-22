import { useEffect, useState } from "react";
import { getCategorias } from "../services/api";
import CategoriaItem from "./CategoriaItem";

function CategoriaTree({ onSelect }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then(data => setCategorias(data));
  }, []);

  return (
    <div style={{ marginRight: 20 }}>
      <h3>Categorías</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {categorias
          .slice()
          .sort((a, b) => a.nombre.localeCompare(b.nombre))
          .map(cat => (
            <CategoriaItem
              key={cat.id}
              categoria={cat}
              onSelect={onSelect}
            />
          ))}
      </ul>
    </div>
  );
}

export default CategoriaTree;
