from django.shortcuts import render
from rest_framework import generics, permissions;
from rest_framework.response import Response;
from .serializers import FavouriteSerializer, AnimalSerializer;
from .models import Favourite, Animal;
from django.http import HttpResponse;
from rest_framework.views import APIView


# Create your views here.
class ListFavourites(generics.ListCreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

class DetailFavourites(generics.RetrieveUpdateDestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    
class UserFavourites(APIView):
    def get(self, request, userID):
        animalsWeWant = Favourite.objects.filter(user_id = userID).values_list('animal_id', flat=True) #values_list('user_id', flat=True)
        my_query = Animal.objects.filter(pk__in=animalsWeWant).values('name', 'description', 'photo_url', 'animal_type', 'breed', 'age', 'size', 'gender', 'shelter_id')
        return Response(my_query)