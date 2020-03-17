from django.shortcuts import render

# Create your views here.

# users/views.py
from rest_framework import generics

from .models import Adopter, SavedSearch, Favourite
from .serializers import AdopterSerializer, SavedSearchSerializer, FavouriteSerializer


class ListAdopter(generics.ListCreateAPIView):
    queryset = Adopter.objects.all()
    serializer_class = AdopterSerializer


class DetailAdopter(generics.RetrieveUpdateDestroyAPIView):
    queryset = Adopter.objects.all()
    serializer_class = AdopterSerializer

class ListSavedSearch(generics.ListCreateAPIView):
    queryset = SavedSearch.objects.all()
    serializer_class = SavedSearchSerializer


class DetailSavedSearch(generics.RetrieveUpdateDestroyAPIView):
    queryset = SavedSearch.objects.all()
    serializer_class = SavedSearchSerializer

class ListFavourite(generics.ListCreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

class DetailFavourite(generics.RetrieveUpdateDestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer