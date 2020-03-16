from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Animal
from .serializers import AnimalSerializer


class ListAnimal(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class DetailAnimal(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer