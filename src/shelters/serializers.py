# shelters/serializers.py
from rest_framework import serializers
from .models import Shelter


class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
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
        )
        model = Shelter
