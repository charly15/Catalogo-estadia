const API_URL = "http://127.0.0.1:8000/api";

export async function getProductos() {
  const response = await fetch(`${API_URL}/productos/`);
  return response.json();
}

export async function getCategorias() {
  const response = await fetch(`${API_URL}/categorias/`);
  return response.json();
}
