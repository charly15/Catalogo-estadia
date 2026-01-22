from rest_framework import serializers
from .models import Producto, Categoria


class CategoriaSerializer(serializers.ModelSerializer):
    subcategorias = serializers.SerializerMethodField()

    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'slug', 'parent', 'subcategorias']

    def get_subcategorias(self, obj):
        return CategoriaSerializer(
            obj.subcategorias.all(),
            many=True
        ).data


class ProductoSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer()

    class Meta:
        model = Producto
        fields = '__all__'
