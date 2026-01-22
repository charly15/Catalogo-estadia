import jsPDF from "jspdf";

export function generarPDF(items, total, numeroPedido) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(16);
  doc.text("Cotización", 20, y);

  y += 10;
  doc.setFontSize(12);

  items.forEach((item, index) => {
    doc.text(
      `${index + 1}. ${item.producto.nombre} | Cantidad: ${item.cantidad} | $${item.producto.precio * item.cantidad}`,
      20,
      y
    );
    y += 8;
  });

  y += 10;
  doc.setFontSize(14);
  doc.text(`Total: $${total}`, 20, y);

  y += 8;
  doc.setFontSize(12);
  doc.text(`Número de pedido: ${numeroPedido}`, 20, y);

  doc.save("cotizacion.pdf");
}
