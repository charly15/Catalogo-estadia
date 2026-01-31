import { useEffect, useState } from "react";
import "./CarruselMarcas.css";

const marcas = [
  "/marcas/siemens.png",
  "/marcas/schneider.png",
  "/marcas/abb.png",
  "/marcas/milwaukee.png",
  "/marcas/legrand.png",
];

function CarruselMarcas() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex(prev => (prev + 1) % marcas.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrusel-marcas">
      <img
        src={marcas[index]}
        alt="Marca"
        className="carrusel-imagen"
      />
    </div>
  );
}

export default CarruselMarcas;
