from django.shortcuts import render

# Create your views here.

# shelters/views.py
from rest_framework import generics

from .models import Shelter
from .serializers import ShelterSerializer


class ListShelter(generics.ListCreateAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer


class DetailShelter(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer