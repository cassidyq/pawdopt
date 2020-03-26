from rest_framework import serializers
from django.contrib.auth.models import User 
from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user_id',
            'photo_url',
        )
        model = UserProfile

   