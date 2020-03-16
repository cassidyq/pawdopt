# todos/serializers.py
from rest_framework import serializers
from .models import Animal


class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'desctription',
            'animal_type',
            'breed',
            'age',
            'size',
            'gender',
            'shelter_id',
        )
        model = Animal