from django.shortcuts import render
from django.db.models.functions import Lower
import json

# Create your views here.
from rest_framework import generics

from animals.models import Animal
from .serializers import CategorySerializer

from rest_framework.views import APIView
from rest_framework.response import Response


class ListAnimalTypes(generics.ListCreateAPIView):
    queryset = list(Animal.objects.values_list('animal_type', flat=True).annotate(handle_lower=Lower("animal_type")).distinct("handle_lower"))
    serializer_class = CategorySerializer
    # queryset = list(Animal.objects.values_list('gender', flat=True).annotate(handle_lower=Lower("gender")).distinct("handle_lower"))

    # queryset = Animal.objects.all()
    print(queryset)