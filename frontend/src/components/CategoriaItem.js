import { useState } from "react";

function CategoriaItem({ categoria, onSelect }) {
  const [abierto, setAbierto] = useState(false);
  const tieneHijos = categoria.subcategorias.length > 0;

  return (
    <li>
      <div
        style={{ cursor: "pointer", fontWeight: "bold" }}
        onClick={() => {
          if (tieneHijos) {
            setAbierto(!abierto);
          } else {
            onSelect(categoria.id);
          }
        }}
      >
        {tieneHijos ? (abierto ? "▾ " : "▸ ") : "• "}
        {categoria.nombre}
      </div>

      {abierto && tieneHijos && (
        <ul style={{ paddingLeft: 20 }}>
          {categoria.subcategorias
            .slice()
            .sort((a, b) => a.nombre.localeCompare(b.nombre))
            .map(sub => (
              <CategoriaItem
                key={sub.id}
                categoria={sub}
                onSelect={onSelect}
              />
            ))}
        </ul>
      )}
    </li>
  );
}

export default CategoriaItem;
