from rest_framework import serializers
from .models import Animal, Favourite
from animals.serializers import AnimalSerializer
from django.contrib.auth.models import User 


class FavouriteSerializer(serializers.ModelSerializer):
    # user = UserSerializer(many=True, read_only=True)
    # animals = AnimalSerializer(many=True)
    class Meta:
        fields = (
            'id',
            'user_id',
            'animal_id',
            'active',
        )
        model = Favourite

   