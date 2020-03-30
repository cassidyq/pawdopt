from django.shortcuts import render
from rest_framework import generics;
from rest_framework.response import Response;
from .serializers import FavouriteSerializer;
from .models import Favourite, Animal;
from applications.models import Application;
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
        animalsWeWant = Favourite.objects.filter(user_id = userID, active = True).values_list('animal_id', flat=True) #values_list('user_id', flat=True)
        favAnimals = Animal.objects.filter(pk__in=animalsWeWant).values('id','name', 'description', 'photo_url', 'animal_type', 'breed', 'age', 'size', 'gender', 'shelter_id')
        animals = Animal.objects.all().values('id', 'name')
        applications = Application.objects.filter(user_id = userID).values('id', 'user_id', 'animal_id', 'created_at', 'status', 'info')
        my_query = {"favourites": favAnimals, "applications": applications, "animals": animals}
        return Response(my_query)