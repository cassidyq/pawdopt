# users/serializers.py
from rest_framework import serializers
from .models import User, SavedSearch, Favourite


class UserSerializer(serializers.ModelSerializer):
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
        model = User

class SavedSearchSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user_id',
            'query_params',
            'name',
        )
        model = SavedSearch

class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user_id',
            'animal_id',
            'name',
        )
        model = Favourite