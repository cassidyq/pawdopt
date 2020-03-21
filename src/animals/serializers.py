# todos/serializers.py
from rest_framework import serializers
from .models import Animal
from applications.serializers import ApplicationSerializer
# from categories.serializers import CategorySerializer


class AnimalSerializer(serializers.ModelSerializer):
    applications = ApplicationSerializer(many=True)
    # categories = CategorySerializer(many=True)
    class Meta:
        fields = (
            'id',
            'name',
            'description',
            'photo_url',
            'animal_type',
            'breed',
            'age',
            'size',
            'gender',
            'shelter_id',
            'applications',
            # 'categories'
        )
        model = Animal