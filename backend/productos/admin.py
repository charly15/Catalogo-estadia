from django.contrib import admin
from .models import Producto, Categoria


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'parent')
    list_filter = ('parent',)
    search_fields = ('nombre',)
    prepopulated_fields = {'slug': ('nombre',)}


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'sku', 'categoria', 'precio', 'stock', 'activo')
    list_filter = ('categoria', 'activo', 'marca')
    search_fields = ('nombre', 'sku', 'marca')
