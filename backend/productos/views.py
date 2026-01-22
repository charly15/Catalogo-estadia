from django.shortcuts import render

from rest_framework import viewsets
from .models import Producto, Categoria
from .serializers import ProductoSerializer, CategoriaSerializer

class CategoriaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Categoria.objects.filter(parent__isnull=True)
    serializer_class = CategoriaSerializer


class ProductoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Producto.objects.filter(activo=True)
    serializer_class = ProductoSerializer
