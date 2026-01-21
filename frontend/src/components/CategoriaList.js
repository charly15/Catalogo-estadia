import { useEffect, useState } from "react";
import { getCategorias } from "../services/api";

function CategoriaList({ onSelect }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then(data => setCategorias(data));
  }, []);

  return (
    <div style={{ marginRight: 20 }}>
      <h3>Categorías</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{ cursor: "pointer", marginBottom: 5 }}
          onClick={() => onSelect(null)}
        >
          Todas
        </li>

        {categorias.map(cat => (
          <li
            key={cat.id}
            style={{ cursor: "pointer", marginBottom: 5 }}
            onClick={() => onSelect(cat.id)}
          >
            {cat.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaList;
