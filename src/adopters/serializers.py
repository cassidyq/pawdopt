# Adopters/serializers.py
from rest_framework import serializers
from .models import Adopter, SavedSearch, Favourite


class AdopterSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'password',
            'photo_url',
            'bio',
        )
        model = Adopter

class SavedSearchSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'adopter_id',
            'query_params',
            'name',
        )
        model = SavedSearch

class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'adopter_id',
            'animal_id',
            'name',
        )
        model = Favourite