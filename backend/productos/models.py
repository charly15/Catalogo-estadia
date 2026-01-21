from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    sku = models.CharField(max_length=100, unique=True)
    marca = models.CharField(max_length=100, blank=True)
    modelo = models.CharField(max_length=100, blank=True)

    descripcion_corta = models.CharField(max_length=255)
    descripcion_larga = models.TextField(blank=True)

    precio = models.DecimalField(max_digits=10, decimal_places=2)
    iva_incluido = models.BooleanField(default=True)

    stock = models.PositiveIntegerField(default=0)

    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

class Cotizacion(models.Model):
    nombre_cliente = models.CharField(max_length=150)
    correo_cliente = models.EmailField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Cotización #{self.id} - {self.nombre_cliente}"


class CotizacionItem(models.Model):
    cotizacion = models.ForeignKey(Cotizacion, related_name='items', on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=1)
