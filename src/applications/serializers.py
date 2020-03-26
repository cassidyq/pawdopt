# todos/serializers.py
from rest_framework import serializers
from .models import Application


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user_id',
            'animal_id',
            'created_at',
            'updated_at',
            'status',
            'info',
        )
        model = Application