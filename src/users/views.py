from django.shortcuts import render

# Create your views here.

# users/views.py
from rest_framework import generics

from .models import User, SavedSearch, Favourite
from .serializers import UserSerializer, SavedSearchSerializer, FavouriteSerializer


class ListUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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