# shelters/serializers.py
from rest_framework import serializers
from .models import Shelter
from animals.serializers import AnimalSerializer


class ShelterSerializer(serializers.ModelSerializer):
    animals = AnimalSerializer(many=True)
    class Meta:
        model = Shelter
        fields = (
            'id',
            'name',
            'email',
            'password',
            'photo_url',
            'description',
            'website',
            'country',
            'province',
            'city',
            'street',
            'postal_code',
            'animals',
        )
        
