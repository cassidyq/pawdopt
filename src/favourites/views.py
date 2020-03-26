from django.shortcuts import render
from rest_framework import generics, permissions;
from rest_framework.response import Response;
from .serializers import FavouriteSerializer;
from .models import Favourite;

# Create your views here.
class ListFavourites(generics.ListCreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

class DetailFavourites(generics.RetrieveUpdateDestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
