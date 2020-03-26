# animals/serializers.py
from rest_framework import serializers
from .models import Animal
from applications.serializers import ApplicationSerializer


class AnimalSerializer(serializers.ModelSerializer):
    applications = ApplicationSerializer(many=True, read_only=True)
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
        
        )
        model = Animal