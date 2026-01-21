from django.contrib import admin
from .models import Producto, Categoria


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'sku', 'precio', 'stock', 'activo')
    list_filter = ('categoria', 'activo', 'marca')
    search_fields = ('nombre', 'sku', 'marca')


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre',)
